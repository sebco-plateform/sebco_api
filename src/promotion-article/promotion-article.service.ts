import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromotionArticleDto } from './dto/create-promotion-article.dto';
import { UpdatePromotionArticleDto } from './dto/update-promotion-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PromotionArticle } from './entities/promotion-article.entity';
import { Repository } from 'typeorm';
import { ArticleService } from 'src/article/article.service';
import { PromotionService } from 'src/promotion/promotion.service';

@Injectable()
export class PromotionArticleService {
  constructor(
    private readonly articleService: ArticleService,
    private readonly promotionService: PromotionService,
  ) {}

  @InjectRepository(PromotionArticle)
  private readonly promotionArticleRepository: Repository<PromotionArticle>;

  async create(createPromotionArticleDto: CreatePromotionArticleDto) {
    const promoArti = this.promotionArticleRepository.create(
      createPromotionArticleDto,
    );

    const article = await this.articleService.findOne(
      createPromotionArticleDto.article_id,
    );
    const promotion = await this.promotionService.findOne(
      createPromotionArticleDto.promotion_id,
    );
    promoArti.promotion = promotion;
    promoArti.article = article;
    return await this.promotionArticleRepository.save(promoArti);
  }

  async findAll() {
    return await this.promotionArticleRepository.find();
  }

  async findOne(id: number) {
    const promoArti = await this.promotionArticleRepository.findOneBy({ id });
    if (!promoArti) throw new NotFoundException('promotion article not fund');
    return promoArti;
  }

  async update(
    id: number,
    updatePromotionArticleDto: UpdatePromotionArticleDto,
  ) {
    const promoArti = await this.findOne(id);
    this.promotionArticleRepository.merge(promoArti, updatePromotionArticleDto);
    return await this.promotionArticleRepository.save(promoArti);
  }

  async remove(id: number) {
    const promoArti = await this.findOne(id);
    await this.promotionArticleRepository.remove(promoArti);
    return promoArti;
  }
}
