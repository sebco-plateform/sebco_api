import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  quarter: string;

  @Column()
  deliveryDate: string;

  @Column({ nullable: true })
  deliveryHoures: string;

  @Column({ nullable: true })
  codePromo: string;

  @Column()
  indiqueName: string;

  @Column()
  indiqueNumber: number;

  @Column({ nullable: true })
  longitude: string;

  @Column()
  latitude: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.delivery)
  user: User;

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
