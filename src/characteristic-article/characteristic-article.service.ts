import { Injectable } from '@nestjs/common';
import { CreateCharacteristicArticleDto } from './dto/create-characteristic-article.dto';
import { UpdateCharacteristicArticleDto } from './dto/update-characteristic-article.dto';

@Injectable()
export class CharacteristicArticleService {
  create(createCharacteristicArticleDto: CreateCharacteristicArticleDto) {
    return 'This action adds a new characteristicArticle';
  }

  findAll() {
    return `This action returns all characteristicArticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characteristicArticle`;
  }

  update(id: number, updateCharacteristicArticleDto: UpdateCharacteristicArticleDto) {
    return `This action updates a #${id} characteristicArticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} characteristicArticle`;
  }
}
