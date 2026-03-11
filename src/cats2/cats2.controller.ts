import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats2')
export class Cats2Controller {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats2';
    }

    @Get('sub/*')
    findSub(@Req() request: Request): string {
        return 'This action returns a sub route of cats2';
    }

    @HttpCode(201)
    @Post()
    @Header('Cache-Control', 'none')
    @Header('X-Powered-By', 'NestJS')
    create(@Req() request: Request): string {
        return 'This action adds a new cat2';
    }
}
