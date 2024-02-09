import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty({ message: 'image Name is required' })
  @IsString({ message: 'image Name is string' })
  imageName: string;

  @IsNotEmpty({ message: 'imageUrl is required' })
  @IsString({ message: 'imageUrl is string' })
  imageUrl: string;

  @IsNotEmpty({ message: 'category id is required' })
  @IsNumber({}, { message: 'category id is number' })
  category_id: number;

  @IsNotEmpty({ message: ' article_id is required' })
  @IsNumber({}, { message: ' article_id is number' })
  article_id: number;
}
