import { Language } from "../entities/books.entity";

export class CreateBookDTO {
    title: string;
    author: string;
    publicationDate: string;
    numberOfPages: number;
    language: Language;
}