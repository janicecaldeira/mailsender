import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Informe um endereço de e-mail' })
  @IsEmail({}, { message: 'Informe um e-mail válido' })
  @MaxLength(200, { message: 'O e-mail deve ter menos de 200 caracteres' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe um nome de usuário' })
  @MaxLength(200, { message: 'O nome deve ter menos de 200 caracteres' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe uma senha' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Informe a confirmação da senha' })
  @MinLength(6, {
    message: 'A confirmação da senha deve ter pelo menos 6 caracteres',
  })
  passwordConfirmation: string;
}
