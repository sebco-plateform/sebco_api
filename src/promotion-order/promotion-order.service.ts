import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePromotionOrderDto } from './dto/create-promotion-order.dto';
import { UpdatePromotionOrderDto } from './dto/update-promotion-order.dto';
import { OrderService } from 'src/order/order.service';
import { PromotionArticleService } from 'src/promotion-article/promotion-article.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PromotionOrder } from './entities/promotion-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromotionOrderService {
  constructor(
    private readonly orderService: OrderService,
    private readonly promotionArticleService: PromotionArticleService,
  ) {}

  @InjectRepository(PromotionOrder)
  private readonly promotionOrderRepository: Repository<PromotionOrder>;

  async create(createPromotionOrderDto: CreatePromotionOrderDto) {
    const pormoOrder = this.promotionOrderRepository.create(
      createPromotionOrderDto,
    );
    const order = await this.orderService.findOne(
      createPromotionOrderDto.order_id,
    );
    const promotionArt = await this.promotionArticleService.findOne(
      createPromotionOrderDto.promotionArticle_id,
    );
    pormoOrder.order = order;
    pormoOrder.promotionArticle = promotionArt;
    return await this.promotionOrderRepository.save(pormoOrder);
  }

  async findAll() {
    return await this.promotionOrderRepository.find({
      relations: ['order', 'promotionArticle'],
    });
  }

  async findOne(id: number) {
    const pormoOrder = await this.promotionOrderRepository.findOneBy({ id });
    if (!pormoOrder) throw new NotFoundException('promotion order not found');
    return pormoOrder;
  }

  async update(id: number, updatePromotionOrderDto: UpdatePromotionOrderDto) {
    const pormoOrder = await this.findOne(id);
    this.promotionOrderRepository.merge(pormoOrder, updatePromotionOrderDto);
    return await this.promotionOrderRepository.save(pormoOrder);
  }

  async remove(id: number) {
    const pormoOrder = await this.findOne(id);
    await this.promotionOrderRepository.remove(pormoOrder);
    return pormoOrder;
  }
}
