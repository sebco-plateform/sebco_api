import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { PromotionOrder } from '../../promotion-order/entities/promotion-order.entity';
import { Promotion } from '../../promotion/entities/promotion.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class PromotionArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToOne(() => Article, (art) => art.promotionArticle, {
    nullable: true,
  })
  article: Article;

  @ManyToOne(() => Promotion, (promo) => promo.promotionArticle, {
    nullable: true,
  })
  promotion: Promotion;

  @OneToMany(() => Comment, (com) => com.promotionArticle)
  comment: Comment[];

  @OneToMany(() => PromotionOrder, (promoOdr) => promoOdr.promotionArticle)
  promotionOrder: PromotionOrder[];
}
