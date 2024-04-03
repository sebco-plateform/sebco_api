import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty({ message: 'image Name is required' })
  @IsString({ message: 'image Name is string' })
  imageName: string;

  @IsNotEmpty({ message: 'imageUrl is required' })
  @IsString({ message: 'imageUrl is string' })
  imageUrl: string;

  @IsNotEmpty({ message: ' article_id is required' })
  @IsNumber({}, { message: ' article_id is number' })
  @IsOptional()
  article_id: number;
}
