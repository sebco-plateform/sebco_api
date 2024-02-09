import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionOrderDto } from './create-promotion-order.dto';

export class UpdatePromotionOrderDto extends PartialType(CreatePromotionOrderDto) {}
