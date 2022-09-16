import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDTO {
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
