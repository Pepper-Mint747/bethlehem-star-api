import { ProvidersName } from 'src/core/providers.enum';
import { Product } from 'src/product/entities/product.entity';
import { DataSource } from 'typeorm';
import { File } from './entities/file.entity';

export const fileProviders = [
  {
    provide: ProvidersName.FILE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(File),
    inject: [ProvidersName.DATA_SOURCE],
  },
];
