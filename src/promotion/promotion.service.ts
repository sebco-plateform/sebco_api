import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class PromotionService {
  constructor() {}

  @InjectRepository(Promotion)
  private readonly promotionRepository: Repository<Promotion>;

  async create(createPromotionDto: CreatePromotionDto) {
    const promoArt = this.promotionRepository.create(createPromotionDto);
    return await this.promotionRepository.save(promoArt);
  }

  async findAll() {
    return await this.promotionRepository.find({
      relations: ['prmotionArticle'],
    });
  }

  async findOne(id: number) {
    const promoArt = await this.promotionRepository.findOneBy({ id });
    if (!promoArt) throw new NotFoundException('prmotion article not found');
    return promoArt;
  }

  async update(id: number, updatePromotionDto: UpdatePromotionDto) {
    const promoArt = await this.findOne(id);
    this.promotionRepository.merge(promoArt, updatePromotionDto);
    return await this.promotionRepository.save(promoArt);
  }

  async remove(id: number) {
    const promoArt = await this.findOne(id);
    await this.promotionRepository.remove(promoArt);
    return promoArt;
  }
}
