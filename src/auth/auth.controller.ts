import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'

@Controller('google')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: any) {
        return req
    }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: any): Promise<any> {
        return this.authService.googleLogin(req)
    }
}
