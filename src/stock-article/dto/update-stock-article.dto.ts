import { PartialType } from '@nestjs/mapped-types';
import { CreateStockArticleDto } from './create-stock-article.dto';

export class UpdateStockArticleDto extends PartialType(CreateStockArticleDto) {}
