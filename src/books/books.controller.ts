import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDTO } from './dto/update-book.dt';
import { GetBookFilterDto } from './dto/get-book-filter.dto';

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
    findAll(@Query() filterDto: GetBookFilterDto){
        return this.booksService.findBooks(filterDto)
    }

    @Patch(':id')
    updateBook(@Param('id') id:string, @Body() body: UpdateBookDTO){
        return this.booksService.updateBook(+id, body)
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string){
        this.booksService.deleteBook(+id)
    }
}
