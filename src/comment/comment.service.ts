import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PromotionArticleService } from 'src/promotion-article/promotion-article.service';
import { UserService } from 'src/user/user.service';
import { OrderService } from 'src/order/order.service';
import { ArticleService } from 'src/article/article.service';
import { PersonService } from 'src/person/person.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    private readonly promotionArticleService: PromotionArticleService,
    private readonly userService: UserService,
    private readonly orderService: OrderService,
    private readonly articleService: ArticleService,
    private readonly personService: PersonService,
  ) {}

  @InjectRepository(Comment)
  private readonly commentRepository: Repository<Comment>;

  async create(createCommentDto: CreateCommentDto) {
    const commment = this.commentRepository.create(createCommentDto);
    if (createCommentDto.promotionArticle_id) {
      const promotion = await this.promotionArticleService.findOne(
        createCommentDto.promotionArticle_id,
      );
      commment.promotionArticle = promotion;
    }

    if (createCommentDto.user_id) {
      const user = await this.userService.findOne(createCommentDto.user_id);
      commment.user = user;
    }

    if (createCommentDto.order_id) {
      const order = await this.orderService.findOne(createCommentDto.order_id);
      commment.order = order;
    }

    if (createCommentDto.article_id) {
      const article = await this.articleService.findOne(
        createCommentDto.article_id,
      );
      commment.article = article;
    }

    if (createCommentDto.person_id) {
      const person = await this.personService.findOne(
        createCommentDto.person_id,
      );
      commment.person = person;
    }
    return await this.commentRepository.save(commment);
  }

  async findAll() {
    return await this.commentRepository.find({
      relations: ['promotionArticle', 'user', 'order', 'article', 'person'],
    });
  }

  async findOne(id: number) {
    const comment = await this.commentRepository.findOneBy({ id });
    if (!comment) throw new NotFoundException('the comment of id not found');
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.findOne(id);
    this.commentRepository.merge(comment, updateCommentDto);
    return await this.commentRepository.save(comment);
  }

  async remove(id: number) {
    const comment = await this.findOne(id);
    await this.commentRepository.remove(comment);
    return comment;
  }
}
