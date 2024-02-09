import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderArticleDto } from './create-order-article.dto';

export class UpdateOrderArticleDto extends PartialType(CreateOrderArticleDto) {}
