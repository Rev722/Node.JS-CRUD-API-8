import { Category } from "../schemas/japbook.schema";



export class CreateJapbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}