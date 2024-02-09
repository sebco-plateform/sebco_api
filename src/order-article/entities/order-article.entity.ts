import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class OrderArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Article, (art) => art.orderArticle)
  article: Article;

  @ManyToOne(() => Order, (order) => order.orderArticle)
  order: Order;
}
