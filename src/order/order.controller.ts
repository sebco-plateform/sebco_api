import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/add')
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.create(createOrderDto);
  }

  @Get('/all')
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get('/getTopBuyingClients')
  async getTopBuyingClients() {
    return await this.orderService.getTopBuyingClients();
  }

  @Get('/getOrderByMonth')
  async getOrderByMonth() {
    return await this.orderService.getOrderByMonth();
  }

  @Get('/single/:status')
  async findByStatus(@Param('status') status: string) {
    return await this.orderService.findByStatus(status);
  }

  @Get('/findByStatus/:id')
  async findOne(@Param('id') id: string) {
    return await this.orderService.findOne(+id);
  }

  @Get('/findOrderByUser/:id')
  async findOrderByUser(@Param('id') id: string) {
    return await this.orderService.findOrderByUser(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.orderService.update(+id, updateOrderDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.orderService.remove(+id);
  }
}
