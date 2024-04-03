import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacteristicArticleService } from './characteristic-article.service';
import { CreateCharacteristicArticleDto } from './dto/create-characteristic-article.dto';
import { UpdateCharacteristicArticleDto } from './dto/update-characteristic-article.dto';

@Controller('characteristic-article')
export class CharacteristicArticleController {
  constructor(
    private readonly characteristicArticleService: CharacteristicArticleService,
  ) {}

  @Post('/add')
  async create(
    @Body() createCharacteristicArticleDto: CreateCharacteristicArticleDto,
  ) {
    return await this.characteristicArticleService.create(
      createCharacteristicArticleDto,
    );
  }

  @Get('all')
  async findAll() {
    return await this.characteristicArticleService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.characteristicArticleService.findOne(+id);
  }

  @Get('/findCharactByArticleId/:id')
  async findCharactByArticleId(@Param('id') id: string) {
    return await this.characteristicArticleService.findCharactByArticleId(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacteristicArticleDto: UpdateCharacteristicArticleDto,
  ) {
    return await this.characteristicArticleService.update(
      +id,
      updateCharacteristicArticleDto,
    );
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.characteristicArticleService.remove(+id);
  }
}
