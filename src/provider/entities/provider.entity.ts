import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StockArticle } from '../../stock-article/entities/stock-article.entity';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  providerName: string;

  @Column()
  providerAddress: string;

  @Column()
  providerContact: string;

  @Column()
  providerTYpe: string;

  @OneToMany(() => StockArticle, (stortArt) => stortArt.provider)
  stockArticle: StockArticle[];
}
