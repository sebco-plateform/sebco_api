import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  @InjectRepository(Person)
  private readonly personRepository: Repository<Person>;

  async create(createPersonDto: CreatePersonDto) {
    const person = this.personRepository.create(createPersonDto);
    return await this.personRepository.save(person);
  }

  async findAll() {
    return await this.personRepository.find();
  }

  async findOne(id: number) {
    const person = await this.personRepository.findOneBy({ id });
    if (!person) throw new NotFoundException('person not found');
    return person;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.findOne(id);
    this.personRepository.merge(person, updatePersonDto);
    return await this.personRepository.save(person);
  }

  async remove(id: number) {
    const person = await this.findOne(id);
    await this.personRepository.remove(person);
    return person;
  }
}
