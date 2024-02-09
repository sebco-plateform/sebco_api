import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacteristicArticleDto } from './create-characteristic-article.dto';

export class UpdateCharacteristicArticleDto extends PartialType(CreateCharacteristicArticleDto) {}
