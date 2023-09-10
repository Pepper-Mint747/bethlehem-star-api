import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { ProvidersName } from "src/core/providers.enum";

export const userProviders = [
  {
    provide: ProvidersName.USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [ProvidersName.DATA_SOURCE],
  },
];
