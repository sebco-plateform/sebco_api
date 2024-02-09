import { Injectable } from '@nestjs/common';
import { CreateStockArticleDto } from './dto/create-stock-article.dto';
import { UpdateStockArticleDto } from './dto/update-stock-article.dto';

@Injectable()
export class StockArticleService {
  create(createStockArticleDto: CreateStockArticleDto) {
    return 'This action adds a new stockArticle';
  }

  findAll() {
    return `This action returns all stockArticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockArticle`;
  }

  update(id: number, updateStockArticleDto: UpdateStockArticleDto) {
    return `This action updates a #${id} stockArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockArticle`;
  }
}
