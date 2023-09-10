import {
  IsNumberString,
  IsObject,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Cover } from 'src/cover/entities/cover.entity';
import { File } from 'src/file/entities/file.entity';
import { IsNull } from 'typeorm';

export class CreateProductDto {
  @IsString()
  @ValidateIf((object, value) => value === null)
  name: string;
  @IsNumberString()
  @ValidateIf((object, value) => value === null)
  price: number;
  @IsNumberString()
  @ValidateIf((object, value) => value === null)
  category: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  color: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  image: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  description: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  quantity: undefined | number;
  //for books
  @IsString()
  @ValidateIf((object, value) => value === null)
  code: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  lang: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  type: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  subtype: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  title: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  first_para: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  author: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  npages: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  isbn: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  publisher: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  pub_year: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  buy_link: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  folder_id: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  folder_color_group: string;
  @IsObject()
  @ValidateIf((object, value) => value === null)
  cover: Cover;
  @IsObject()
  @ValidateIf((object, value) => value === null)
  file: File;
  @IsString()
  @ValidateIf((object, value) => value === null)
  download: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  last_modified: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  permission_required: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  sort: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  is_audiobook: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  cite: string;
  // @IsObject()
  // @ValidateIf((object, value) => value === null)
  // translated_into: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  nelements: string;
}
