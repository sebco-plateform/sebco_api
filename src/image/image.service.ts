import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ArticleService } from 'src/article/article.service';
import { CategoryService } from 'src/category/category.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    private readonly articleService: ArticleService,
    private readonly categoryService: CategoryService,
  ) {}

  @InjectRepository(Image)
  private readonly imageRepository: Repository<Image>;

  async create(createImageDto: CreateImageDto) {
    const image = this.imageRepository.create(createImageDto);
    if (createImageDto.article_id) {
      const article = await this.articleService.findOne(
        createImageDto.article_id,
      );
      image.article = article;
    }

    if (createImageDto.category_id) {
      const category = await this.categoryService.findOne(
        createImageDto.article_id,
      );
      image.category = category;
    }
    return await this.imageRepository.save(image);
  }

  async findAll() {
    return await this.imageRepository.find({
      relations: ['category', 'article'],
    });
  }

  async findOne(id: number) {
    const image = await this.imageRepository.findOneBy({ id });

    if (!image) throw new NotFoundException('image not found');

    return image;
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    const image = await this.findOne(id);
    this.imageRepository.merge(image, updateImageDto);
    return await this.imageRepository.save(image);
  }

  async remove(id: number) {
    const image = await this.findOne(id);
    await this.imageRepository.remove(image);
    return image;
  }
}
