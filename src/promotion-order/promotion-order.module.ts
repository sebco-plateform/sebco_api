import { Module } from '@nestjs/common';
import { PromotionOrderService } from './promotion-order.service';
import { PromotionOrderController } from './promotion-order.controller';

@Module({
  controllers: [PromotionOrderController],
  providers: [PromotionOrderService],
})
export class PromotionOrderModule {}
