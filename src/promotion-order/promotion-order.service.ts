import { Injectable } from '@nestjs/common';
import { CreatePromotionOrderDto } from './dto/create-promotion-order.dto';
import { UpdatePromotionOrderDto } from './dto/update-promotion-order.dto';

@Injectable()
export class PromotionOrderService {
  create(createPromotionOrderDto: CreatePromotionOrderDto) {
    return 'This action adds a new promotionOrder';
  }

  findAll() {
    return `This action returns all promotionOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotionOrder`;
  }

  update(id: number, updatePromotionOrderDto: UpdatePromotionOrderDto) {
    return `This action updates a #${id} promotionOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotionOrder`;
  }
}
