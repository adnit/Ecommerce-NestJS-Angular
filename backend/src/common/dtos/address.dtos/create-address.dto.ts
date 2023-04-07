import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAddressDto {
  @Length(1, 255)
  @IsString()
  address_line1: string;

  @Length(1, 255)
  @IsString()
  address_line2: string;

  @Length(1, 100)
  @IsString()
  city: string;

  @Length(1, 50)
  @IsString()
  state: string;

  @Length(1, 50)
  @IsString()
  postal_code: string;

  @Length(1, 15)
  @IsString()
  country: string;

  @Length(1, 100)
  @IsEmail()
  @IsString()
  email: string;

  @Length(1, 20)
  @IsString()
  phone: string;

  @Length(1, 50)
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @Length(1, 50)
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @IsDate()
  created_at: Date;

  @IsNotEmpty()
  @IsDate()
  updated_at: Date;
}
