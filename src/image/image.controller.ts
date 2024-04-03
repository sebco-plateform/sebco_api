import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/add')
  async create(@Body() createImageDto: CreateImageDto) {
    return await this.imageService.create(createImageDto);
  }

  @Get('/all')
  async findAll() {
    return await this.imageService.findAll();
  }

  @Get('/articleImage/:id')
  async findImageByArticle(@Param('id') id: string) {
    return await this.imageService.findImageByArticleId(+id);
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.imageService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto,
  ) {
    return await this.imageService.update(+id, updateImageDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.imageService.remove(+id);
  }
}
