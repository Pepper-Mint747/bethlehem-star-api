import {
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateFileDto {
  @IsString()
  @ValidateIf((object, value) => value === null)
  mp3: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  pdf: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  epub: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  mobi: string;
}
