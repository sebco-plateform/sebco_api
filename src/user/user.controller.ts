import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import LoginDto from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('/all')
  async findAll() {
    return await this.userService.findAll();
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }

  @Post('/phoneVerification')
  async phoneVerification(@Body() phone: {phone: number}) {
    return await this.userService.phoneVerivication(phone)
  }

  @Post('/emailVerification')
  async emailVerification(@Body() email: {email: string}) {
    return await this.userService.emailVerivication(email)
  }

  @Post('/passwordVerification')
  async passwordVerification(@Body() passwords: {password: string, passwordExist: string}) {
    return await this.userService.verificationPassword(passwords)
  }

  @Get('/single/:id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Get('/findUserByRole/:role')
  async findUserByRole(@Param('role') role: string) {
    return await this.userService.findUserByRole(role);
  }

  @Get('/findUserByEmail/:email')
  async findUserByEmail(@Param('email') email: string) {
    return await this.userService.findUserByEmail(email);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
