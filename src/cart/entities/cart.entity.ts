import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;
  @Column()
  quantity: undefined | number;
  @ManyToOne(() => Product, product => product.carts)
  product: Product;
  @ManyToOne(() => User, user => user.carts)
  user: User;
}
