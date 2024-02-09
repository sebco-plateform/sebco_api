import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { CategoryModule } from '../category/category.module';
import { PromotionArticleModule } from '../promotion-article/promotion-article.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
    CategoryModule,
    PromotionArticleModule,
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [TypeOrmModule, ArticleService],
})
export class ArticleModule {}
