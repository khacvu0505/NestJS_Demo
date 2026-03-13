import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import type { Request } from 'express';
import { CreateCat2Dto } from './dto/create-cats2';

@Controller('cats2')
export class Cats2Controller {
    @Get()
    findAll(@Query('name') name : string, @Query('age') age: number): string {
        return `This action returns all cats2, name: ${name}, age: ${age}`;
    }


    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat2`;
    }

    @Get('sub/*')
    findSub(@Req() request: Request): string {
        return 'This action returns a sub route of cats2';
    }

    @HttpCode(201)
    @Post()
    @Header('Cache-Control', 'none')
    @Header('X-Powered-By', 'NestJS')
    create(@Body() createCat2Dto: CreateCat2Dto): string {
        return `This action adds a new cat2, ${createCat2Dto.name}`;
    }

    @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    @Redirect('https://avironactive.com/', 302)
    getDocs(@Query('version') version) {
        console.log("version", version)
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
}
