import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/books.entity';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dt';
import { GetBookFilterDto } from './dto/get-book-filter.dto';
import { loadEnvFile } from 'process';

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

    findBooks(filterDto : GetBookFilterDto){
        const {search, author, publicationDate, language} = filterDto;
        let filterBooks = this.books;

        if(search){
            filterBooks.filter((book)=> book.title.toLowerCase() == search.toLowerCase() || book.author.toLowerCase() == search.toLowerCase());
        }
        if(author){
            filterBooks.filter((book)=> book.author.toLowerCase() == author.toLowerCase());
        }
        if(publicationDate){
            filterBooks.filter((book)=> book.publicationDate == publicationDate);
        }
        if(language){
            filterBooks.filter((book)=> book.language== language);
        }
        return filterBooks;
    }

    updateBook(id: number, updateBook: UpdateBookDTO){
        const book = this.findBook(id)
        Object.assign(book, updateBook)
        return book
    }

    deleteBook(id: number){
        const index = this.books.findIndex((book)=>book.id == id)
        if(index!=-1) {
            this.books.splice(index, 1)
            return `Book with ${id} deleted from the list `
        }
        throw new NotFoundException(`Book with ${id} not found in the list`)
    }
}
