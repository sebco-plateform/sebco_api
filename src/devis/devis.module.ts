import { Module } from '@nestjs/common';
import { DevisService } from './devis.service';
import { DevisController } from './devis.controller';

@Module({
  controllers: [DevisController],
  providers: [DevisService],
})
export class DevisModule {}
