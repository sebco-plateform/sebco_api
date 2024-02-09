import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'message is not empety' })
  @IsString({ message: 'message is string' })
  message: string;

  @IsNotEmpty({ message: 'date is not empety' })
  @IsString({ message: 'date is string' })
  date: string;
  @IsOptional()
  @IsNumber({}, { message: 'id is not empty' })
  promotionArticle: number;

  @IsOptional()
  @IsNumber({}, { message: 'id is not empty' })
  user: number;

  @IsOptional()
  @IsNumber({}, { message: 'id is not empty' })
  order: number;

  @IsOptional()
  @IsNumber({}, { message: 'id is not empty' })
  article: number;

  @IsOptional()
  @IsNumber({}, { message: 'id is not empty' })
  person: number;
}
