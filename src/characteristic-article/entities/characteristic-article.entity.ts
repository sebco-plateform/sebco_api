import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from '../../article/entities/article.entity';
import { Characteristic } from '../../characteristic/entities/characteristic.entity';

@Entity()
export class CharacteristicArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Article, (artic) => artic.characteristicArticle)
  article: Article;

  @ManyToOne(() => Characteristic, (artic) => artic.characteristicArticle)
  characteristic: Characteristic;

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
