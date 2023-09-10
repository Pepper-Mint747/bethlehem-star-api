import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { fileProviders } from './file.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FileController],
  imports: [DatabaseModule],
  providers: [FileService, ...fileProviders],
  exports: [FileService, ...fileProviders],
})
export class FileModule {}
