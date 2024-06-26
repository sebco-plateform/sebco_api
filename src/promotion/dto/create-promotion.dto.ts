import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePromotionDto {
  @IsNotEmpty({ message: 'beginDate is required' })
  @IsString({ message: 'beginDate is string' })
  beginDate: string;

  @IsNotEmpty({ message: 'endDate is required' })
  @IsString({ message: 'endDate is string' })
  endDate: string;

  @IsNotEmpty({ message: 'description is required' })
  @IsString({ message: 'description is string' })
  description: string;
}
