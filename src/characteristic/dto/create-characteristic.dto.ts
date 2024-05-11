import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCharacteristicDto {
  @IsNotEmpty({ message: 'the name of chatacteristic can t be empty' })
  @IsString({ message: 'the category name is string' })
  charactName: string;

  @IsNotEmpty({ message: 'the value can t be empty' })
  @IsString({ message: 'the value is string' })
  value: string;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isActive: boolean;

  @IsOptional()
  @IsBoolean({ message: 'is an boolean' })
  isVisible: boolean;
}
