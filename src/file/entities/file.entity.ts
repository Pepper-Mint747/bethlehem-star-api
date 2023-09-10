import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  mp3: string;
  @Column('text')
  pdf: string;
  @Column('text')
  epub: string;
  @Column('text')
  mobi: string;
}
