import { Module } from '@nestjs/common';
import { CoverService } from './cover.service';
import { CoverController } from './cover.controller';
import { coverProviders } from './cover.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [CoverController],
  imports:[DatabaseModule],
  providers: [CoverService, ...coverProviders],
  exports:[CoverService, ...coverProviders]
})
export class CoverModule {}
