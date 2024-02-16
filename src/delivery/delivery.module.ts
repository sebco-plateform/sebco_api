import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Delivery]), UserModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [TypeOrmModule, DeliveryService],
})
export class DeliveryModule {}
