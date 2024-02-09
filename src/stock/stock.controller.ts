import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post('/add')
  async create(@Body() createStockDto: CreateStockDto) {
    return await this.stockService.create(createStockDto);
  }

  @Get('/all')
  async findAll() {
    return await this.stockService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.stockService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return await this.stockService.update(+id, updateStockDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.stockService.remove(+id);
  }
}
