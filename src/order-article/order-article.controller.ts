import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderArticleService } from './order-article.service';
import { CreateOrderArticleDto } from './dto/create-order-article.dto';
import { UpdateOrderArticleDto } from './dto/update-order-article.dto';

@Controller('order-article')
export class OrderArticleController {
  constructor(private readonly orderArticleService: OrderArticleService) {}

  @Post('/add')
  async create(@Body() createOrderArticleDto: CreateOrderArticleDto) {
    return await this.orderArticleService.create(createOrderArticleDto);
  }

  @Get('/all')
  async findAll() {
    return await this.orderArticleService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.orderArticleService.findOne(+id);
  }

  @Get('/findByOrder/:id')
  async findItemsByOrder(@Param('id') id: string) {
    return await this.orderArticleService.findItemsByOrder(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderArticleDto: UpdateOrderArticleDto,
  ) {
    return await this.orderArticleService.update(+id, updateOrderArticleDto);
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string) {
    return await this.orderArticleService.remove(+id);
  }
}
