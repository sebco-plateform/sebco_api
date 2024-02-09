import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionArticleService } from './promotion-article.service';
import { CreatePromotionArticleDto } from './dto/create-promotion-article.dto';
import { UpdatePromotionArticleDto } from './dto/update-promotion-article.dto';

@Controller('promotion-article')
export class PromotionArticleController {
  constructor(private readonly promotionArticleService: PromotionArticleService) {}

  @Post()
  create(@Body() createPromotionArticleDto: CreatePromotionArticleDto) {
    return this.promotionArticleService.create(createPromotionArticleDto);
  }

  @Get()
  findAll() {
    return this.promotionArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePromotionArticleDto: UpdatePromotionArticleDto) {
    return this.promotionArticleService.update(+id, updatePromotionArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionArticleService.remove(+id);
  }
}
