import { IsString, ValidateIf } from "class-validator";

export class CreateCoverDto {
  @IsString()
  @ValidateIf((object, value) => value === null)
  small: string;
  @IsString()
  @ValidateIf((object, value) => value === null)
  large: string;
}
