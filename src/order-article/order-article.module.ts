import { Module } from '@nestjs/common';
import { OrderArticleService } from './order-article.service';
import { OrderArticleController } from './order-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderArticle } from './entities/order-article.entity';
import { OrderModule } from 'src/order/order.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderArticle]),
    OrderModule,
    ArticleModule,
  ],
  controllers: [OrderArticleController],
  providers: [OrderArticleService],
  exports: [TypeOrmModule, OrderArticleService],
})
export class OrderArticleModule {}
