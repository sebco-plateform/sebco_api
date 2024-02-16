import { Module } from '@nestjs/common';
import { PromotionOrderService } from './promotion-order.service';
import { PromotionOrderController } from './promotion-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromotionOrder } from './entities/promotion-order.entity';
import { OrderModule } from 'src/order/order.module';
import { PromotionArticleModule } from 'src/promotion-article/promotion-article.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PromotionOrder]),
    OrderModule,
    PromotionArticleModule,
  ],
  controllers: [PromotionOrderController],
  providers: [PromotionOrderService],
  exports: [TypeOrmModule, PromotionOrderService],
})
export class PromotionOrderModule {}
