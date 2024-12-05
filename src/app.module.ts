import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { bookMarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UserModule, bookMarkModule]
})
export class AppModule { }
