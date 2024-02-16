import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromotionOrderService } from './promotion-order.service';
import { CreatePromotionOrderDto } from './dto/create-promotion-order.dto';
import { UpdatePromotionOrderDto } from './dto/update-promotion-order.dto';

@Controller('promotion-order')
export class PromotionOrderController {
  constructor(private readonly promotionOrderService: PromotionOrderService) {}

  @Post('/add')
  async create(@Body() createPromotionOrderDto: CreatePromotionOrderDto) {
    return await this.promotionOrderService.create(createPromotionOrderDto);
  }

  @Get('/all')
  async findAll() {
    return await this.promotionOrderService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.promotionOrderService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePromotionOrderDto: UpdatePromotionOrderDto,
  ) {
    return await this.promotionOrderService.update(
      +id,
      updatePromotionOrderDto,
    );
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.promotionOrderService.remove(+id);
  }
}
