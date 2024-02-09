import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './entities/stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {
  @InjectRepository(Stock)
  private readonly stockRepository: Repository<Stock>;
  async create(createStockDto: CreateStockDto) {
    const stock = this.stockRepository.create(createStockDto);
    return await this.stockRepository.save(stock);
  }

  async findAll() {
    return await this.stockRepository.find();
  }

  async findOne(id: number) {
    const stock = await this.stockRepository.findOneBy({ id });
    if (!stock) throw new NotFoundException(`stock of id: ${id} not found`);
    return stock;
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    const stock = await this.findOne(id);
    this.stockRepository.merge(stock, updateStockDto);
    return await this.stockRepository.save(stock);
  }

  async remove(id: number) {
    const stock = await this.findOne(id);
    await this.stockRepository.remove(stock);
    return stock;
  }
}
