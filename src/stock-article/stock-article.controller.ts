import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockArticleService } from './stock-article.service';
import { CreateStockArticleDto } from './dto/create-stock-article.dto';
import { UpdateStockArticleDto } from './dto/update-stock-article.dto';

@Controller('stock-article')
export class StockArticleController {
  constructor(private readonly stockArticleService: StockArticleService) {}

  @Post('/add')
  async create(@Body() createStockArticleDto: CreateStockArticleDto) {
    return await this.stockArticleService.create(createStockArticleDto);
  }

  @Get('/all')
  async findAll() {
    return await this.stockArticleService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.stockArticleService.findOne(+id);
  }

  @Patch('/upate/:id')
  async update(
    @Param('id') id: string,
    @Body() updateStockArticleDto: UpdateStockArticleDto,
  ) {
    return await this.stockArticleService.update(+id, updateStockArticleDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.stockArticleService.remove(+id);
  }
}
