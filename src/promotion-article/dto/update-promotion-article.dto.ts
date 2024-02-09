import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionArticleDto } from './create-promotion-article.dto';

export class UpdatePromotionArticleDto extends PartialType(CreatePromotionArticleDto) {}
