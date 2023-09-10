import { ProvidersName } from 'src/core/providers.enum';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: ProvidersName.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'bethstar',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
