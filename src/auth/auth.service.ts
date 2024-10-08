import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { SignupAuthDto } from './dto/signup-auth.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async signup(signupDto: SignupAuthDto): Promise<User> {
        
        const findByEmail = this.userModel.find({email: signupDto.email});
        if(findByEmail){
            console.log("this email is already exists!!");
            throw new BadRequestException("this email is already exists!!")
        }
        
        return this.userModel.create(signupDto);
    }




}
