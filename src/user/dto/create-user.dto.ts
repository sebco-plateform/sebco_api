import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

enum RoleEnum {
  ADMIN = 'admin',
  SUPERADMIN = 'super_admin',
  CUSTOMER = 'customer',
  DRIVER = 'driver',
}
export class CreateUserDto {
  @IsNotEmpty({ message: 'the phone is required' })
  @IsNumber({}, { message: 'the phone is number' })
  phone: number;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  password: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  @IsEmail({}, { message: 'email not valide' })
  email: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  firstName: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  lastName: string;

  @IsNotEmpty({ message: 'is required' })
  @IsString({ message: 'is string' })
  role: RoleEnum;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isActive: boolean;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isVisible: boolean;
}
