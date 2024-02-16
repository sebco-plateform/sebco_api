import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCharacteristicArticleDto {
  @IsString({ message: 'description is number' })
  @IsOptional()
  description: string;

  @IsNotEmpty({ message: 'article id can t be empty' })
  @IsNumber({}, { message: 'id is number' })
  article_id: number;

  @IsNotEmpty({ message: 'article id can t be empty' })
  @IsNumber({}, { message: 'id is number' })
  characteristic_id: number;
}
