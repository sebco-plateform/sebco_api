import { Module } from '@nestjs/common';
import { StockArticleService } from './stock-article.service';
import { StockArticleController } from './stock-article.controller';

@Module({
  controllers: [StockArticleController],
  providers: [StockArticleService],
})
export class StockArticleModule {}
