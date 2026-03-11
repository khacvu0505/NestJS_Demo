import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('cats2')
export class Cats2Controller {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats2';
    }
}
