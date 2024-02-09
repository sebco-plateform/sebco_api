import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'the phone is required' })
  @IsNumber({}, { message: 'the phone is number' })
  phone: number;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  password: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  email: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  firstName: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  lastName: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  role: string;
}
