import { Module } from '@nestjs/common';
import { CharacteristicArticleService } from './characteristic-article.service';
import { CharacteristicArticleController } from './characteristic-article.controller';

@Module({
  controllers: [CharacteristicArticleController],
  providers: [CharacteristicArticleService],
})
export class CharacteristicArticleModule {}
