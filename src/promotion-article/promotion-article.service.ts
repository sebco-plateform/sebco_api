import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromotionArticleDto } from './dto/create-promotion-article.dto';
import { UpdatePromotionArticleDto } from './dto/update-promotion-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PromotionArticle } from './entities/promotion-article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromotionArticleService {
  @InjectRepository(PromotionArticle)
  private readonly promotionArticleRepository: Repository<PromotionArticle>;
  create(createPromotionArticleDto: CreatePromotionArticleDto) {
    return `This action adds a ${createPromotionArticleDto}new promotionArticle`;
  }

  findAll() {
    return `This action returns all promotionArticle`;
  }

  async findOne(id: number) {
    const promoArti = await this.promotionArticleRepository.findOneBy({ id });
    if (!promoArti) throw new NotFoundException('promotion article not fund');
    return promoArti;
  }

  update(id: number, updatePromotionArticleDto: UpdatePromotionArticleDto) {
    return `This action updates a #${id} promotionArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotionArticle`;
  }
}
