import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { PromotionArticleModule } from 'src/promotion-article/promotion-article.module';
import { UserModule } from 'src/user/user.module';
import { OrderModule } from 'src/order/order.module';
import { ArticleModule } from 'src/article/article.module';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    PromotionArticleModule,
    UserModule,
    OrderModule,
    ArticleModule,
    PersonModule,
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [TypeOrmModule, CommentService],
})
export class CommentModule {}
