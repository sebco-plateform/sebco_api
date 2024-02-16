import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promotion } from './entities/promotion.entity';
import { PromotionArticleModule } from 'src/promotion-article/promotion-article.module';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion]), PromotionArticleModule],
  controllers: [PromotionController],
  providers: [PromotionService],
  exports: [TypeOrmModule, PromotionService],
})
export class PromotionModule {}
