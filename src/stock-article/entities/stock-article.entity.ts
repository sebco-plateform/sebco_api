import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { Stock } from '../../stock/entities/stock.entity';
import { Provider } from '../../provider/entities/provider.entity';

@Entity()
export class StockArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stockPrice: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Article, (arti) => arti.stockArticle)
  article: Article;

  @ManyToOne(() => Stock, (sto) => sto.stockArticle)
  stock: Stock;

  @ManyToOne(() => Provider, (prov) => prov.stockArticle)
  provider: Provider;
}
