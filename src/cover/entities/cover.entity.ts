import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cover {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  small: string;
  @Column()
  large: string;
}
