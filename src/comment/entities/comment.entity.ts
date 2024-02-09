import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PromotionArticle } from '../../promotion-article/entities/promotion-article.entity';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../order/entities/order.entity';
import { Article } from '../../article/entities/article.entity';
import { Person } from '../../person/entities/person.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  date: string;

  @ManyToOne(() => PromotionArticle, (order) => order.comment, {
    nullable: true,
  })
  promotionArticle: PromotionArticle;

  @ManyToOne(() => User, (user) => user.comment, {
    nullable: true,
  })
  user: User;

  @ManyToOne(() => Order, (order) => order.comment, {
    nullable: true,
  })
  order: Order;

  @ManyToOne(() => Article, (art) => art.comment, {
    nullable: true,
  })
  article: Article;

  @ManyToOne(() => Person, (pers) => pers.comment, {
    nullable: true,
  })
  person: Person;
}
