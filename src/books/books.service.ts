import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/books.entity';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dt';

@Injectable()
export class BooksService {
    private books: Book[] = []

    createBook(data: CreateBookDTO): Book{
        const book = {
            id:1111,
            ...data
        };

        this.books.push(book)
        return book
    }

    findBook(id: number){
        const searchedBook = this.books.find((book)=> book.id == id)
        if(!searchedBook){
            throw new NotFoundException(`Book with id ${id} not found`)
        }
        return searchedBook
    }

    findBooks(){
        return this.books
    }

    updateBook(id: number, updateBook: UpdateBookDTO){
        const book = this.findBook(id)
        Object.assign(book, updateBook)
        return book
    }
}
