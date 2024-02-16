import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UserModule } from 'src/user/user.module';
import { DeliveryModule } from 'src/delivery/delivery.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), UserModule, DeliveryModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [TypeOrmModule, OrderService],
})
export class OrderModule {}
