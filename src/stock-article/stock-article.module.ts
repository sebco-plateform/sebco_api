import { Module } from '@nestjs/common';
import { StockArticleService } from './stock-article.service';
import { StockArticleController } from './stock-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockArticle } from './entities/stock-article.entity';
import { ArticleModule } from 'src/article/article.module';
import { StockModule } from 'src/stock/stock.module';
import { ProviderModule } from 'src/provider/provider.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockArticle]),
    ArticleModule,
    StockModule,
    ProviderModule,
  ],
  controllers: [StockArticleController],
  providers: [StockArticleService],
  exports: [TypeOrmModule, StockArticleService],
})
export class StockArticleModule {}
