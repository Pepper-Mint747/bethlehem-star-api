import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CoverService } from 'src/cover/cover.service';
import { CoverModule } from 'src/cover/cover.module';
import { FileModule } from 'src/file/file.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProviders,],
  imports:[DatabaseModule, CoverModule, FileModule]
})
export class ProductModule {}
