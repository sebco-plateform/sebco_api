import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  @InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>;
  async create(createCategoryDto: CreateCategoryDto) {
    const cate = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(cate);
  }

  async findAll() {
    return await this.categoryRepository.find({ where: { isVisible: true } });
  }

  async findAllDisable() {
    return await this.categoryRepository.find({ where: { isVisible: false } });
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category)
      throw new NotFoundException(`category of id: ${id} not found`);
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    this.categoryRepository.merge(category, updateCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async remove(id: number) {
    const cat = await this.findOne(id);
    await this.categoryRepository.remove(cat);
    return cat;
  }
}
