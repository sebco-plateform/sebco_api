import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PromotionArticle } from '../../promotion-article/entities/promotion-article.entity';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  beginDate: string;

  @Column()
  endDate: string;

  @Column()
  description: string;

  @OneToMany(() => PromotionArticle, (promoArt) => promoArt.promotion)
  promotionArticle: PromotionArticle[];
}
