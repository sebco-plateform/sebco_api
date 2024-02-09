import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  personName: string;

  @Column({ nullable: true })
  personPhone: number;

  @OneToMany(() => Comment, (com) => com.person)
  comment: Comment[];
}
