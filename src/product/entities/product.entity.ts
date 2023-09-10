import { Cart } from 'src/cart/entities/cart.entity';
import { Cover } from 'src/cover/entities/cover.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { File } from 'src/file/entities/file.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('decimal')
  price: number;
  @Column('text')
  category: string;
  @Column('text')
  color: string;
  @Column('text')
  image: string;
  @Column('longtext')
  description: string;
  @Column('int')
  quantity: undefined | number;
  carts: Cart[];

  //for books
  @Column()
  code: string;
  @Column()
  lang: string;
  @Column()
  type: string;
  @Column()
  subtype: string;
  @Column()
  title: string;
  @Column()
  first_para: string;
  @Column()
  author: string;
  @Column()
  npages: string;
  @Column()
  isbn: string;
  @Column()
  publisher: string;
  @Column()
  pub_year: string;
  @Column()
  buy_link: string;
  @Column()
  folder_id: string;
  @Column()
  folder_color_group: string;

  @OneToOne(() => Cover, {eager:true})
  @JoinColumn()
  cover: Cover;

  @OneToOne(() => File, { eager:true})
  @JoinColumn()
  file: File;


  @Column()
  download: string;
  @Column()
  last_modified: string;
  @Column()
  permission_required: string;
  @Column()
  sort: string;
  @Column()
  is_audiobook: string;
  @Column()
  cite: string;
  @Column()
  translated_into: string;
  @Column()
  nelements: string;

  // @Column()
  // productId: undefined | number;
}
