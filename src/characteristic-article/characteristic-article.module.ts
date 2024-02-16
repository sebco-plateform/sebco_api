import { Module } from '@nestjs/common';
import { CharacteristicArticleService } from './characteristic-article.service';
import { CharacteristicArticleController } from './characteristic-article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicArticle } from './entities/characteristic-article.entity';
import { CharacteristicModule } from 'src/characteristic/characteristic.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CharacteristicArticle]),
    CharacteristicModule,
    ArticleModule,
  ],
  controllers: [CharacteristicArticleController],
  providers: [CharacteristicArticleService],
  exports: [TypeOrmModule, CharacteristicArticleService],
})
export class CharacteristicArticleModule {}
