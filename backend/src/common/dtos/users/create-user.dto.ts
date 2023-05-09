import { IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserGender } from '../../constants/enums/user-gender.enum';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsCustomEmail() // custom decorator
  email: string;

  @IsBoolean()
  verified: boolean;

  password: string; // No decorator needed because of the middleware check

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  city: string;

  // @IsDateFormat()
  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(UserGender)
  gender: UserGender;
}
