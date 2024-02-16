import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DeliveryService } from 'src/delivery/delivery.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly userService: UserService,
    private readonly deliveryService: DeliveryService,
  ) {}

  @InjectRepository(Order)
  private readonly orderRepository: Repository<Order>;

  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    const user = await this.userService.findOne(createOrderDto.user_id);
    const delivery = await this.deliveryService.findOne(
      createOrderDto.delivery_id,
    );

    order.user = user;
    order.delivery = delivery;
    return await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.find({
      relations: ['user', 'delivery'],
    });
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOneBy({ id });

    if (!order) throw new NotFoundException('order not found');
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id);
    this.orderRepository.merge(order, updateOrderDto);
    return await this.orderRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
    return order;
  }
}
