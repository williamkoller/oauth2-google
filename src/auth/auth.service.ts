import { Injectable } from '@nestjs/common'
import { ReturnUserDto } from './dtos/return-user.dto'

@Injectable()
export class AuthService {
    async googleLogin(req: any): Promise<ReturnUserDto> {
        if (!req.user) {
            return {
                message: 'No user from Google.',
            }
        }
        return {
            message: 'User information from Google.',
            user: req.user,
        }
    }
}
