import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromotionArticleService } from './promotion-article.service';
import { CreatePromotionArticleDto } from './dto/create-promotion-article.dto';
import { UpdatePromotionArticleDto } from './dto/update-promotion-article.dto';

@Controller('promotion-article')
export class PromotionArticleController {
  constructor(
    private readonly promotionArticleService: PromotionArticleService,
  ) {}

  @Post('/add')
  async create(@Body() createPromotionArticleDto: CreatePromotionArticleDto) {
    return await this.promotionArticleService.create(createPromotionArticleDto);
  }

  @Get('/all')
  async findAll() {
    return await this.promotionArticleService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.promotionArticleService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePromotionArticleDto: UpdatePromotionArticleDto,
  ) {
    return await this.promotionArticleService.update(
      +id,
      updatePromotionArticleDto,
    );
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.promotionArticleService.remove(+id);
  }
}
