import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ArticleService {
  constructor(private readonly categoryService: CategoryService) {}
  @InjectRepository(Article)
  private readonly articleRepository: Repository<Article>;
  async create(createArticleDto: CreateArticleDto) {
    const article = await this.articleRepository.create(createArticleDto);

    const cart = await this.categoryService.findOne(
      createArticleDto.category_id,
    );
    article.category = cart;

    return await this.articleRepository.save(article);
  }

  async findAll() {
    return await this.articleRepository.find({
      relations: ['category'],
      where: { isVisible: true },
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

  async findArticleByCategory(id: number) {
    const articles = await this.articleRepository
      .createQueryBuilder()
      .select('article', 'article')
      .addSelect('category.id', 'category_id')
      .from('article', 'article')
      .innerJoin('article.category', 'category')
      .where('category.id = :id', { id: id })
      .andWhere('article.isVisible= : value', { value: true })
      .groupBy('article.id')
      .addGroupBy('category.id')
      .getRawMany();

    return articles;
  }

  async findArticleByCategoryName(name: string) {
    const articles = await this.articleRepository
      .createQueryBuilder()
      .select('article', 'article')
      .addSelect('category.id', 'category_id')
      .from('article', 'article')
      .innerJoin('article.category', 'category')
      .where('category.catName = :catName', { catName: name })
      .andWhere('article.isVisible= : value', { value: true })
      .groupBy('article.id')
      .addGroupBy('category.id')
      .getRawMany();

    return articles;
  }
}
