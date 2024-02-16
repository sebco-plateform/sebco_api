import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('/add')
  async create(@Body() createPersonDto: CreatePersonDto) {
    return await this.personService.create(createPersonDto);
  }

  @Get('/all')
  async findAll() {
    return await this.personService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.personService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return await this.personService.update(+id, updatePersonDto);
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string) {
    return await this.personService.remove(+id);
  }
}
