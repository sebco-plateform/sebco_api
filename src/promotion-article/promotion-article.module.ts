import { Module } from '@nestjs/common';
import { PromotionArticleService } from './promotion-article.service';
import { PromotionArticleController } from './promotion-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionArticle } from './entities/promotion-article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromotionArticle])],
  controllers: [PromotionArticleController],
  providers: [PromotionArticleService],
  exports: [PromotionArticleService, TypeOrmModule],
})
export class PromotionArticleModule {}
