import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { Order } from '../../order/entities/order.entity';

@Entity('orderArticle')
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
