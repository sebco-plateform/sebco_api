import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderArticleService } from './order-article.service';
import { CreateOrderArticleDto } from './dto/create-order-article.dto';
import { UpdateOrderArticleDto } from './dto/update-order-article.dto';

@Controller('order-article')
export class OrderArticleController {
  constructor(private readonly orderArticleService: OrderArticleService) {}

  @Post()
  create(@Body() createOrderArticleDto: CreateOrderArticleDto) {
    return this.orderArticleService.create(createOrderArticleDto);
  }

  @Get()
  findAll() {
    return this.orderArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderArticleDto: UpdateOrderArticleDto) {
    return this.orderArticleService.update(+id, updateOrderArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderArticleService.remove(+id);
  }
}
