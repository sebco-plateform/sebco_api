import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'the name of category can t be empty' })
  @IsString({ message: 'the category name is string' })
  catName: string;

  @IsNotEmpty({ message: 'the name of category can t be empty' })
  @IsString({ message: 'the category name is string' })
  imageUrl: string;

  @IsNotEmpty({ message: 'the description can t be empty' })
  @IsString({ message: 'the description is string' })
  description: string;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isActive: boolean;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isVisible: boolean;
}
