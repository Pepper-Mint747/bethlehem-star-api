import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { cartProviders } from './cart.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CartController],
  providers: [CartService, ...cartProviders],
  imports:[DatabaseModule]
})
export class CartModule {}
