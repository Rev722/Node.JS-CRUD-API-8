import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Japbook } from './schemas/japbook.schema';
import { JapbookService } from './japbook.service';
import { CreateJapbookDto } from './dto/create-japbook.dto';
import { UpdateJapbookDto } from './dto/update-japbook.dto';

@Controller('japbooks')
export class JapbookController {
    constructor(private japbookService: JapbookService) {}

    @Get()
    async getAllJapbooks(): Promise <Japbook[]> {
        return this.japbookService.findAll();
    }

    @Post()
    async createJapbook (
        @Body()
        japbook: CreateJapbookDto,
    ): Promise <Japbook> {
        return this.japbookService.create(japbook);
    }

    @Get(':id')
    async getJapbook(
    @Param('id')
    id: string,
    ): Promise <Japbook> {
        return this.japbookService.findById(id);
    }

    @Put(':id')
    async updateJapbook (
        @Param('id')
        id: string,
        @Body()
        japbook: UpdateJapbookDto,
    ): Promise <Japbook> {
        return this.japbookService.updateById(id, japbook);
    }

    @Delete(':id')
    async deleteJapbook(
    @Param('id')
    id: string,
    ): Promise <Japbook> {
        return this.japbookService.deleteById(id);
    }

}
