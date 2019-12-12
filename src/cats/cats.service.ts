import { Injectable } from '@nestjs/common';
import { Cat } from '../interface/interface.cat';
import { CreateCatDto } from 'src/dto/create-cat.dtp';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
