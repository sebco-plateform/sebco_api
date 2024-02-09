import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionOrderService } from './promotion-order.service';
import { CreatePromotionOrderDto } from './dto/create-promotion-order.dto';
import { UpdatePromotionOrderDto } from './dto/update-promotion-order.dto';

@Controller('promotion-order')
export class PromotionOrderController {
  constructor(private readonly promotionOrderService: PromotionOrderService) {}

  @Post()
  create(@Body() createPromotionOrderDto: CreatePromotionOrderDto) {
    return this.promotionOrderService.create(createPromotionOrderDto);
  }

  @Get()
  findAll() {
    return this.promotionOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionOrderDto: UpdatePromotionOrderDto) {
    return this.promotionOrderService.update(+id, updatePromotionOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionOrderService.remove(+id);
  }
}
