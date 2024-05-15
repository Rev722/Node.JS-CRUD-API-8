import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    UZI = '20MIN',
    PEEP = 'SAVETHATSHIT',
    GOONIE = 'PRETTYPETITE',
}

@Schema({
    timestamps: true,
})

export class Japbook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const JapbookSchema = SchemaFactory.createForClass(Japbook)