import { Language } from "../entities/books.entity";

export class GetBookFilterDto {
    search? : string;
    author?: string;
    publicationDate? : string;
    language? : Language;
}