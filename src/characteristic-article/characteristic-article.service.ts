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
    if (createCharacteristicArticleDto.characteristic_id) {
      const characteristic = await this.characteristicService.findOne(
        createCharacteristicArticleDto.characteristic_id,
      );
      charatArticle.characteristic = characteristic;
    }

    if (createCharacteristicArticleDto.article_id) {
      const article = await this.articleService.findOne(
        createCharacteristicArticleDto.article_id,
      );
      charatArticle.article = article;
    }

    return await this.characteristicArticleRepositori.save(charatArticle);
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

  async findCharactByArticleId(id: number) {
    const charact = await this.characteristicArticleRepositori
      .createQueryBuilder()
      .select('characteristicArticle', 'characteristicArticle')
      .addSelect('characteristic', 'characteristic')
      .addSelect('article', 'article')
      .from('characteristicArticle', 'characteristicArticle')
      .innerJoin('characteristicArticle.characteristic', 'characteristic')
      .innerJoin('characteristicArticle.article', 'article')
      .where('article.id = :id', { id: id })
      .groupBy('characteristicArticle.id')
      .addGroupBy('article.id')
      .addGroupBy('characteristic.id')
      .getMany();

    return charact;
  }
}
