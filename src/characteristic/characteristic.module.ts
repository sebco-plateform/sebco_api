import { Module } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Characteristic } from './entities/characteristic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Characteristic])],
  controllers: [CharacteristicController],
  providers: [CharacteristicService],
  exports: [TypeOrmModule, CharacteristicService],
})
export class CharacteristicModule {}
