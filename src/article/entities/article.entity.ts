import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Image } from '../../image/entities/image.entity';
import { StockArticle } from '../../stock-article/entities/stock-article.entity';
import { CharacteristicArticle } from '../../characteristic-article/entities/characteristic-article.entity';
import { OrderArticle } from '../../order-article/entities/order-article.entity';
import { PromotionArticle } from '../../promotion-article/entities/promotion-article.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleName: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({ nullable: true })
  tax: number;

  @ManyToOne(() => Category, (cat) => cat.article)
  category: Category;

  @OneToMany(() => Image, (img) => img.article)
  image: Image[];

  @OneToMany(() => StockArticle, (artSto) => artSto.article)
  stockArticle: StockArticle[];

  @OneToMany(() => CharacteristicArticle, (artSto) => artSto.article)
  characteristicArticle: CharacteristicArticle[];

  @OneToMany(() => OrderArticle, (orderAr) => orderAr.article)
  orderArticle: OrderArticle[];

  @OneToMany(() => PromotionArticle, (promoArt) => promoArt.article)
  promotionArticle: PromotionArticle[];

  @OneToMany(() => Comment, (com) => com.article)
  comment: Comment[];

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
