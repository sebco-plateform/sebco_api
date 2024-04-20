import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderArticleDto } from './dto/create-order-article.dto';
import { UpdateOrderArticleDto } from './dto/update-order-article.dto';
import { OrderService } from 'src/order/order.service';
import { ArticleService } from 'src/article/article.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderArticle } from './entities/order-article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderArticleService {
  constructor(
    private readonly orderService: OrderService,
    private readonly articleService: ArticleService,
  ) {}

  @InjectRepository(OrderArticle)
  private readonly orderArticleRepository: Repository<OrderArticle>;

  async create(createOrderArticleDto: CreateOrderArticleDto) {
    const orderArticle = this.orderArticleRepository.create(
      createOrderArticleDto,
    );

    const article = await this.articleService.findOne(
      createOrderArticleDto.article_id,
    );

    const order = await this.orderService.findOne(
      createOrderArticleDto.order_id,
    );

    orderArticle.article = article;
    orderArticle.order = order;
    return await this.orderArticleRepository.save(orderArticle);
  }

  async findAll() {
    return await this.orderArticleRepository.find({
      relations: ['order', 'article'],
    });
  }

  async findOne(id: number) {
    const orderArt = await this.orderArticleRepository.findOneBy({ id });
    if (!orderArt) throw new NotFoundException('order article not found');
    return orderArt;
  }

  async update(id: number, updateOrderArticleDto: UpdateOrderArticleDto) {
    const orderArt = await this.findOne(id);
    this.orderArticleRepository.merge(orderArt, updateOrderArticleDto);
    return await this.orderArticleRepository.save(orderArt);
  }

  async remove(id: number) {
    const orderArt = await this.findOne(id);
    await this.orderArticleRepository.remove(orderArt);
    return orderArt;
  }

  async findItemsByOrder(id: number) {
    const items = await this.orderArticleRepository
      .createQueryBuilder()
      .select('orderArticle', 'orderArticle')
      .addSelect('article', 'article')
      .addSelect('order', 'order')
      .from('orderArticle', 'orderArticle')
      .innerJoin('orderArticle.article', 'article')
      .innerJoin('orderArticle.order', 'order')
      .where('order.id = :id', { id: id })
      .groupBy('orderArticle.id')
      .addGroupBy('order.id')
      .addGroupBy('article.id')
      .getRawMany();

    return items;
  }

  async findItemsByCustomer(id: number) {
    const items = await this.orderArticleRepository
      .createQueryBuilder()
      .select('orderArticle', 'orderArticle')
      .addSelect('article', 'article')
      .addSelect('order', 'order')
      .from('orderArticle', 'orderArticle')
      .innerJoin('orderArticle.article', 'article')
      .innerJoin('orderArticle.order', 'order')
      .where('order.user.id = :id', { id: id })
      .groupBy('orderArticle.id')
      .addGroupBy('order.id')
      .addGroupBy('article.id')
      .getRawMany();

    return items;
  }
}
