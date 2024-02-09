import { Module } from '@nestjs/common';
import { OrderArticleService } from './order-article.service';
import { OrderArticleController } from './order-article.controller';

@Module({
  controllers: [OrderArticleController],
  providers: [OrderArticleService],
})
export class OrderArticleModule {}
