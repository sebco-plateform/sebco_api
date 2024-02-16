import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post('/add')
  async create(@Body() createPromotionDto: CreatePromotionDto) {
    return await await this.promotionService.create(createPromotionDto);
  }

  @Get('/all')
  async findAll() {
    return await await this.promotionService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await await this.promotionService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePromotionDto: UpdatePromotionDto,
  ) {
    return await await this.promotionService.update(+id, updatePromotionDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await await this.promotionService.remove(+id);
  }
}
