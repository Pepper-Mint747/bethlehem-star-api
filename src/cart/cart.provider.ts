import { DataSource } from "typeorm";
import { Cart } from "./entities/cart.entity";
import { ProvidersName } from "src/core/providers.enum";

export const cartProviders = [
  {
    provide: ProvidersName.CART_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cart),
    inject: [ProvidersName.DATA_SOURCE],
  },
];
