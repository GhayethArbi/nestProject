import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupAuthDto  {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    readonly email:string;

    @IsString()
    @IsNotEmpty()
    readonly password:string;
}
