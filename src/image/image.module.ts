import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { CategoryModule } from 'src/category/category.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [TypeOrmModule.forFeature([Image]), CategoryModule, ArticleModule],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [TypeOrmModule, ImageService],
})
export class ImageModule {}
