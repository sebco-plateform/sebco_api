import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderArticle } from '../../order-article/entities/order-article.entity';
import { PromotionOrder } from '../../promotion-order/entities/promotion-order.entity';
import { User } from '../../user/entities/user.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Delivery } from '../../delivery/entities/delivery.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalPrice: number;

  @Column()
  status: string;

  @OneToMany(() => OrderArticle, (orderAr) => orderAr.order)
  orderArticle: OrderArticle[];

  @OneToMany(() => PromotionOrder, (promoOdr) => promoOdr.order)
  promotionOrder: PromotionOrder[];

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @OneToMany(() => Comment, (com) => com.order)
  comment: Comment[];

  @OneToOne(() => Delivery)
  @JoinColumn()
  delivery: Delivery;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
