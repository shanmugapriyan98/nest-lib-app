import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dt';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get(':id')
    findOneBook(@Param('id') id: string){
        return this.booksService.findBook(+id)
    }

    @Post()
    createBook(@Body() body:CreateBookDTO){
        return this.booksService.createBook(body)
    }

    @Get()
    findAll(){
        return this.booksService.findBooks()
    }

    @Patch(':id')
    updateBook(@Param('id') id:string, @Body() body: UpdateBookDTO){
        return this.booksService.updateBook(+id, body)
    }
}
