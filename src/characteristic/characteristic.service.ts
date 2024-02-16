import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Characteristic } from './entities/characteristic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CharacteristicService {
  @InjectRepository(Characteristic)
  private readonly characteristicRepository: Repository<Characteristic>;

  async create(createCharacteristicDto: CreateCharacteristicDto) {
    const charact = this.characteristicRepository.create(
      createCharacteristicDto,
    );

    return await this.characteristicRepository.save(charact);
  }

  async findAll() {
    return await this.characteristicRepository.find();
  }

  async findOne(id: number) {
    const charact = await this.characteristicRepository.findOneBy({ id });
    if (!charact) throw new NotFoundException('characteristic not found');
    return charact;
  }

  async update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    const charact = await this.findOne(id);
    this.characteristicRepository.merge(charact, updateCharacteristicDto);
    return await this.characteristicRepository.save(charact);
  }

  async remove(id: number) {
    const charact = await this.findOne(id);
    await this.characteristicRepository.remove(charact);
    return charact;
  }
}
