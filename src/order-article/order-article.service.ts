import { Injectable } from '@nestjs/common';
import { CreateOrderArticleDto } from './dto/create-order-article.dto';
import { UpdateOrderArticleDto } from './dto/update-order-article.dto';

@Injectable()
export class OrderArticleService {
  create(createOrderArticleDto: CreateOrderArticleDto) {
    return 'This action adds a new orderArticle';
  }

  findAll() {
    return `This action returns all orderArticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderArticle`;
  }

  update(id: number, updateOrderArticleDto: UpdateOrderArticleDto) {
    return `This action updates a #${id} orderArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderArticle`;
  }
}
