import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { PromotionArticle } from '../../promotion-article/entities/promotion-article.entity';

@Entity()
export class PromotionOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Order, (order) => order.promotionOrder)
  order: Order;

  @ManyToOne(() => PromotionArticle, (order) => order.promotionOrder)
  promotionArticle: PromotionArticle;
}
