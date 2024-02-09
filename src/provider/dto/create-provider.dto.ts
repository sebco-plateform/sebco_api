import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProviderDto {
  @IsNotEmpty({ message: 'the providerName is required' })
  @IsString({ message: 'the providerName is string' })
  providerName: string;

  @IsNotEmpty({ message: 'the providerAddress is required' })
  @IsString({ message: 'the providerAddress is string' })
  providerAddress: string;

  @IsNotEmpty({ message: 'the providerContact is required' })
  @IsString({ message: 'the providerContact is string' })
  providerContact: string;

  @IsNotEmpty({ message: 'the providerTYpe is required' })
  @IsString({ message: 'the providerTYpe is string' })
  providerTYpe: string;
}
