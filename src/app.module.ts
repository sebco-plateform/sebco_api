import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { ArticleModule } from './article/article.module';
import { ProviderModule } from './provider/provider.module';
import { StockModule } from './stock/stock.module';
import { StockArticleModule } from './stock-article/stock-article.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { CharacteristicArticleModule } from './characteristic-article/characteristic-article.module';
import { CommentModule } from './comment/comment.module';
import { PromotionModule } from './promotion/promotion.module';
import { PromotionArticleModule } from './promotion-article/promotion-article.module';
import { PromotionOrderModule } from './promotion-order/promotion-order.module';
import { OrderModule } from './order/order.module';
import { DevisModule } from './devis/devis.module';
import { OrderArticleModule } from './order-article/order-article.module';
import { DeliveryModule } from './delivery/delivery.module';
import { UserModule } from './user/user.module';
import { PersonModule } from './person/person.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Characteristic } from './characteristic/entities/characteristic.entity';
import { Comment } from './comment/entities/comment.entity';
import { Delivery } from './delivery/entities/delivery.entity';
import { Devi } from './devis/entities/devi.entity';
import { Image } from './image/entities/image.entity';
import { Order } from './order/entities/order.entity';
import { OrderArticle } from './order-article/entities/order-article.entity';
import { Promotion } from './promotion/entities/promotion.entity';
import { PromotionArticle } from './promotion-article/entities/promotion-article.entity';
import { PromotionOrder } from './promotion-order/entities/promotion-order.entity';
import { Provider } from './provider/entities/provider.entity';
import { Stock } from './stock/entities/stock.entity';
import { StockArticle } from './stock-article/entities/stock-article.entity';
import { User } from './user/entities/user.entity';
import { Article } from './article/entities/article.entity';
import { Category } from './category/entities/category.entity';
import { CharacteristicArticle } from './characteristic-article/entities/characteristic-article.entity';
import { config } from 'dotenv';
import { Person } from './person/entities/person.entity';

config();
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
        type: 'postgres',
        //url: configService.get<string>('psql'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('BD_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [
          Article,
          Category,
          CharacteristicArticle,
          Characteristic,
          Comment,
          Delivery,
          Devi,
          Image,
          Order,
          OrderArticle,
          Promotion,
          PromotionArticle,
          PromotionOrder,
          Provider,
          Stock,
          StockArticle,
          User,
          Person,
        ],

        synchronize: true,
        /*ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },*/
      }),
    }),
    CategoryModule,
    ImageModule,
    ArticleModule,
    ProviderModule,
    StockModule,
    StockArticleModule,
    CharacteristicModule,
    CharacteristicArticleModule,
    CommentModule,
    PromotionModule,
    PromotionArticleModule,
    PromotionOrderModule,
    OrderModule,
    DevisModule,
    OrderArticleModule,
    DeliveryModule,
    UserModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
