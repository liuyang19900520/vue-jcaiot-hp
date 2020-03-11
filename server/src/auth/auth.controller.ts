import { Controller, Request, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AddUserDTO } from '../users/users.schema';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Post('auth/register')
    async register(@Body() addUserDTO: AddUserDTO) {
        console.log(addUserDTO);
        return this.authService.register(addUserDTO);
    }

}