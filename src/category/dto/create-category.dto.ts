import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'the name of category can t be empty' })
  @IsString({ message: 'the category name is string' })
  catName: string;

  @IsNotEmpty({ message: 'the description can t be empty' })
  @IsString({ message: 'the description is string' })
  description: string;
}
