import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockArticleService } from './stock-article.service';
import { CreateStockArticleDto } from './dto/create-stock-article.dto';
import { UpdateStockArticleDto } from './dto/update-stock-article.dto';

@Controller('stock-article')
export class StockArticleController {
  constructor(private readonly stockArticleService: StockArticleService) {}

  @Post()
  create(@Body() createStockArticleDto: CreateStockArticleDto) {
    return this.stockArticleService.create(createStockArticleDto);
  }

  @Get()
  findAll() {
    return this.stockArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockArticleDto: UpdateStockArticleDto) {
    return this.stockArticleService.update(+id, updateStockArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockArticleService.remove(+id);
  }
}
