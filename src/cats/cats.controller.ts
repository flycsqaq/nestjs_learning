import {
  Controller,
  Post,
  Request,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interface/interface.cat';
import { HttpExceptionFilter } from 'src/httpexception/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async createCat(@Body() cat: Cat) {
    this.catsService.create(cat);
  }

  //   @Get()
  //   async findAll(): Promise<Cat[]> {
  //     return this.catsService.findAll();
  //   }
  @Get()
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
