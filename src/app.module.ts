import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { AuthService } from './auth/auth.service'

@Module({
    imports: [AuthModule],
    controllers: [],
    providers: [AuthService],
})
export class AppModule {}
