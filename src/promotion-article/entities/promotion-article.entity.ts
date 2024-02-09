import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => Article, (art) => art.promotionArticle)
  article: Article[];

  @OneToMany(() => Promotion, (promo) => promo.promotionArticle)
  promotion: Promotion[];

  @OneToMany(() => Comment, (com) => com.promotionArticle)
  comment: Comment[];

  @OneToMany(() => PromotionOrder, (promoOdr) => promoOdr.promotionArticle)
  promotionOrder: PromotionOrder[];
}
