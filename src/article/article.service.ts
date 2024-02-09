import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { PromotionArticleService } from '../promotion-article/promotion-article.service';

@Injectable()
export class ArticleService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly promotionArticleService: PromotionArticleService,
  ) {}
  @InjectRepository(Article)
  private readonly articleRepository: Repository<Article>;
  async create(createArticleDto: CreateArticleDto) {
    const article = await this.articleRepository.create(createArticleDto);

    const cart = await this.categoryService.findOne(
      createArticleDto.category_id,
    );
    article.category = cart;
    if (createArticleDto.promotionArticle_id) {
      const promoArti = await this.promotionArticleService.findOne(
        createArticleDto.promotionArticle_id,
      );
      article.promotionArticle = promoArti;
    }
    return await this.articleRepository.save(article);
  }

  async findAll() {
    return await this.articleRepository.find({
      relations: ['category', 'promotionArticle'],
    });
  }

  async findOne(id: number) {
    const articleOne = await this.articleRepository.findOneBy({ id });
    if (!articleOne) throw new NotFoundException(`article of id: ${id}`);
    return articleOne;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    const article = await this.findOne(id);
    this.articleRepository.merge(article, updateArticleDto);
    return await this.articleRepository.save(article);
  }

  async remove(id: number) {
    const article = await this.findOne(id);
    await this.articleRepository.remove(article);
    return article;
  }
}
