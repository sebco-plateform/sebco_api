import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Delivery } from '../../delivery/entities/delivery.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  role: string;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[];

  @OneToMany(() => Comment, (com) => com.user)
  comment: Comment[];

  @OneToMany(() => Delivery, (deliv) => deliv.user)
  delivery: Delivery[];
}
