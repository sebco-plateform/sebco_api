import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProviderService {
  @InjectRepository(Provider)
  private readonly providerRepository: Repository<Provider>;

  async create(createProviderDto: CreateProviderDto) {
    const provider = this.providerRepository.create(createProviderDto);
    return await this.providerRepository.save(provider);
  }

  async findAll() {
    return await this.providerRepository.find();
  }

  async findOne(id: number) {
    const provider = await this.providerRepository.findOneBy({ id });
    if (!provider) throw new NotFoundException('provider not found');
    return provider;
  }

  async update(id: number, updateProviderDto: UpdateProviderDto) {
    const provider = await this.findOne(id);
    this.providerRepository.merge(provider, updateProviderDto);
    return await this.providerRepository.save(provider);
  }

  async remove(id: number) {
    const provider = await this.findOne(id);
    await this.providerRepository.remove(provider);
    return provider;
  }
}
