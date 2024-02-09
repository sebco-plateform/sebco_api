import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty({ message: 'personName_id is required' })
  @IsString({ message: 'personName is string' })
  personName_: string;

  @IsNotEmpty({ message: 'personPhone_id is required' })
  @IsNumber({}, { message: 'personPhone is number' })
  personPhone: number;
}
