import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from 'src/user/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserShema }]),
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
