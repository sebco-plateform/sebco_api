import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacteristicArticleDto } from './dto/create-characteristic-article.dto';
import { UpdateCharacteristicArticleDto } from './dto/update-characteristic-article.dto';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacteristicArticle } from './entities/characteristic-article.entity';
import { Repository } from 'typeorm';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class CharacteristicArticleService {
  constructor(
    private readonly characteristicService: CharacteristicService,
    private readonly articleService: ArticleService,
  ) {}
  @InjectRepository(CharacteristicArticle)
  private readonly characteristicArticleRepositori: Repository<CharacteristicArticle>;

  async create(createCharacteristicArticleDto: CreateCharacteristicArticleDto) {
    const charatArticle = this.characteristicArticleRepositori.create(
      createCharacteristicArticleDto,
    );
    const characteristic = await this.characteristicService.findOne(
      createCharacteristicArticleDto.characteristic_id,
    );

    const article = await this.articleService.findOne(
      createCharacteristicArticleDto.article_id,
    );

    charatArticle.characteristic = characteristic;
    charatArticle.article = article;
    return await this.characteristicArticleRepositori.save(characteristic);
  }

  async findAll() {
    return await this.characteristicArticleRepositori.find({
      relations: ['characteristic', 'article'],
    });
  }

  async findOne(id: number) {
    const characArtic = await this.characteristicArticleRepositori.findOneBy({
      id,
    });

    if (!characArtic)
      throw new NotFoundException('characteristic article not found');
    return characArtic;
  }

  async update(
    id: number,
    updateCharacteristicArticleDto: UpdateCharacteristicArticleDto,
  ) {
    const charac = await this.findOne(id);
    this.characteristicArticleRepositori.merge(
      charac,
      updateCharacteristicArticleDto,
    );
    return charac;
  }

  async remove(id: number) {
    const charac = await this.findOne(id);
    await this.characteristicArticleRepositori.remove(charac);
    return charac;
  }
}
