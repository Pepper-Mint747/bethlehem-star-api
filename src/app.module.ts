import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.provider';
import { CoverModule } from './cover/cover.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [ProductModule, CartModule, OrderModule, UserModule, DatabaseModule, CoverModule, FileModule],
  controllers: [AppController],
  providers: [AppService,...databaseProviders],
})
export class AppModule {}
