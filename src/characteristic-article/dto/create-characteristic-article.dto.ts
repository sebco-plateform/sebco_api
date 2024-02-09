import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCharacteristicArticleDto {
  @IsNotEmpty({ message: 'article id can t be empty' })
  @IsNumber({}, { message: 'id is number' })
  article_id: number;

  @IsNotEmpty({ message: 'article id can t be empty' })
  @IsNumber({}, { message: 'id is number' })
  characteristic_id: number;
}
