import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { UserService } from 'src/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryService {
  constructor(private readonly userService: UserService) {}

  @InjectRepository(Delivery)
  private readonly deliveryRepository: Repository<Delivery>;

  async create(createDeliveryDto: CreateDeliveryDto) {
    const delivery = this.deliveryRepository.create(createDeliveryDto);

    const user = await this.userService.findOne(createDeliveryDto.user_id);
    delivery.user = user;
    return await this.deliveryRepository.save(delivery);
  }

  async findAll() {
    return await this.deliveryRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number) {
    const delivery = await this.deliveryRepository.findOneBy({ id });
    if (!delivery) throw new NotFoundException('delivery not found');
    return delivery;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    const delivery = await this.findOne(id);
    this.deliveryRepository.merge(delivery, updateDeliveryDto);
    return await this.deliveryRepository.save(delivery);
  }

  async remove(id: number) {
    const delivery = await this.findOne(id);
    await this.deliveryRepository.remove(delivery);
    return delivery;
  }
}
