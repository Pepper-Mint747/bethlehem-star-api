import { ProvidersName } from "src/core/providers.enum";
import { Product } from "src/product/entities/product.entity";
import { DataSource } from "typeorm";
import { Cover } from "./entities/cover.entity";

export const coverProviders = [
  {
    provide: ProvidersName.COVER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cover),
    inject: [ProvidersName.DATA_SOURCE],
  },
];
