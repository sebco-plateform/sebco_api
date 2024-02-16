import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockArticleDto } from './dto/create-stock-article.dto';
import { UpdateStockArticleDto } from './dto/update-stock-article.dto';
import { ArticleService } from 'src/article/article.service';
import { StockService } from 'src/stock/stock.service';
import { ProviderService } from 'src/provider/provider.service';
import { InjectRepository } from '@nestjs/typeorm';
import { StockArticle } from './entities/stock-article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockArticleService {
  constructor(
    private readonly articleService: ArticleService,
    private readonly stockService: StockService,
    private readonly providerService: ProviderService,
  ) {}

  @InjectRepository(StockArticle)
  private readonly stockArticleRepository: Repository<StockArticle>;

  async create(createStockArticleDto: CreateStockArticleDto) {
    const stockArt = this.stockArticleRepository.create(createStockArticleDto);
    const article = await this.articleService.findOne(
      createStockArticleDto.article_id,
    );
    const stock = await this.stockService.findOne(
      createStockArticleDto.stock_id,
    );
    const provider = await this.providerService.findOne(
      createStockArticleDto.provider_id,
    );

    stockArt.article = article;
    stockArt.stock = stock;
    stockArt.provider = provider;
    return await this.stockArticleRepository.save(stockArt);
  }

  async findAll() {
    return await this.stockArticleRepository.find({
      relations: ['stock', 'article', 'provider'],
    });
  }

  async findOne(id: number) {
    const stockArt = await this.stockArticleRepository.findOneBy({ id });
    if (!stockArt) throw new NotFoundException('stock article not found');
    return stockArt;
  }

  async update(id: number, updateStockArticleDto: UpdateStockArticleDto) {
    const stockArt = await this.findOne(id);
    this.stockArticleRepository.merge(stockArt, updateStockArticleDto);
    return await this.stockArticleRepository.save(stockArt);
  }

  async remove(id: number) {
    const stockArt = await this.findOne(id);
    await this.stockArticleRepository.remove(stockArt);
    return stockArt;
  }
}
