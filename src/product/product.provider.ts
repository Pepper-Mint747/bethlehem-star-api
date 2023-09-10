import { DataSource } from "typeorm";
import { Product } from "./entities/product.entity";
import { ProvidersName } from "src/core/providers.enum";

export const productProviders = [
  {
    provide: ProvidersName.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [ProvidersName.DATA_SOURCE],
  },
];
