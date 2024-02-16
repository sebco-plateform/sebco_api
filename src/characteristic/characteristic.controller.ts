import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Post('/add')
  async create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return await this.characteristicService.create(createCharacteristicDto);
  }

  @Get('/all')
  async findAll() {
    return await this.characteristicService.findAll();
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.characteristicService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacteristicDto: UpdateCharacteristicDto,
  ) {
    return await this.characteristicService.update(
      +id,
      updateCharacteristicDto,
    );
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.characteristicService.remove(+id);
  }
}
