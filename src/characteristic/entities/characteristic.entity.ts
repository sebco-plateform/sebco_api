import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CharacteristicArticle } from '../../characteristic-article/entities/characteristic-article.entity';

@Entity()
export class Characteristic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  charactName: string;

  @Column()
  value: string;

  @OneToMany(() => CharacteristicArticle, (chart) => chart.characteristic)
  characteristicArticle: CharacteristicArticle[];

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
