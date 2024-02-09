import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacteristicArticleService } from './characteristic-article.service';
import { CreateCharacteristicArticleDto } from './dto/create-characteristic-article.dto';
import { UpdateCharacteristicArticleDto } from './dto/update-characteristic-article.dto';

@Controller('characteristic-article')
export class CharacteristicArticleController {
  constructor(private readonly characteristicArticleService: CharacteristicArticleService) {}

  @Post()
  create(@Body() createCharacteristicArticleDto: CreateCharacteristicArticleDto) {
    return this.characteristicArticleService.create(createCharacteristicArticleDto);
  }

  @Get()
  findAll() {
    return this.characteristicArticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characteristicArticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacteristicArticleDto: UpdateCharacteristicArticleDto) {
    return this.characteristicArticleService.update(+id, updateCharacteristicArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characteristicArticleService.remove(+id);
  }
}
