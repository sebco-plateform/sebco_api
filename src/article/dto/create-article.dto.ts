import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty({ message: 'article name required!' })
  @IsString({ message: 'article name is string!' })
  articleName: string;

  @IsNotEmpty({ message: 'the price is required' })
  @IsNumber({}, { message: 'the price is a number!' })
  price: number;

  @IsNotEmpty({ message: 'the description is required' })
  @IsString({ message: 'the description is string' })
  description: string;

  @IsNumber({}, { message: 'the tax is a number!' })
  @IsOptional()
  tax: number;

  @IsNotEmpty({ message: 'the category id is required' })
  @IsNumber({}, { message: 'the category id is a number!' })
  category_id: number;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isActive: boolean;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isVisible: boolean;
}
