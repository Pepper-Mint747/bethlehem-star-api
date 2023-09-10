import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDto } from './create-file.dto';

export class UpdateFileDto extends PartialType(CreateFileDto) {
  mp3: string;
  pdf: string;
  epub: string;
  mobi: string;
}
