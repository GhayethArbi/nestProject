import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './entities/user.entity';
import { UserMiddelware } from './user.middelware';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserShema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
   consumer.apply(UserMiddelware).forRoutes('*');
  }
}
