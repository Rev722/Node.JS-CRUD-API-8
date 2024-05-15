import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Japbook } from './schemas/japbook.schema';

@Injectable()
export class JapbookService {
    constructor(
        @InjectModel(Japbook.name)
        private japbookModel: mongoose.Model<Japbook>
    ) {}

    async findAll(): Promise <Japbook[]> {
        const japbooks = await this.japbookModel.find();
        return japbooks;
    }

    async create(japbook: Japbook): Promise <Japbook> {
        const res = await this.japbookModel.create(japbook);
        return res;
    }

    async findById(id: string): Promise <Japbook> {
        const japbook = await this.japbookModel.findById(id);

        if(!japbook) {
            throw new NotFoundException('Japbook not found.')
        }
        return japbook;
    }

    async updateById(id: string, japbook: Japbook): Promise <Japbook> {
            return await this.japbookModel.findByIdAndUpdate(id, japbook, {

            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise <Japbook> {
        return await this.japbookModel.findByIdAndDelete(id);

    }
}
