import { Module } from '@nestjs/common';
import { PromotionArticleService } from './promotion-article.service';
import { PromotionArticleController } from './promotion-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionArticle } from './entities/promotion-article.entity';
import { ArticleModule } from 'src/article/article.module';
import { PromotionModule } from 'src/promotion/promotion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PromotionArticle]),
    ArticleModule,
    PromotionModule,
  ],
  controllers: [PromotionArticleController],
  providers: [PromotionArticleService],
  exports: [PromotionArticleService, TypeOrmModule],
})
export class PromotionArticleModule {}
