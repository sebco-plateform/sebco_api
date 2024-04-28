import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import LoginDto from './dto/login-user.dto';
import { truncate } from 'fs';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    user.password = await bcrypt.hash(createUserDto.password, 10);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return user;
  }

  //phone verification
  async phoneVerivication(phone: {phone: number}) {
    const userLog = await this.userRepository.find({
      where: { phone: phone.phone },
      select: ['id', 'phone', 'password', 'role'],
    });
    if(userLog.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  //email verification
  async emailVerivication(email: {email: string}) {
    const userLog = await this.userRepository.find({
      where: { email: email.email },
    });
    if(userLog.length > 0) {
      return userLog[0];
    }
  }

  //password verification
  async verificationPassword(passwords: {password: string, passwordExist: string}) {
    const com = await bcrypt.compare(passwords.password, passwords.passwordExist);
    if (com) {
      return true;
    }
    else {
      return false;
    }
    
  }

  /** login function */
  async login(loginDto: LoginDto) {
    const phone = loginDto.phone;
    const userLog = await this.userRepository.find({
      where: { phone: phone },
      select: ['id', 'phone', 'password', 'role'],
    });
    if (userLog.length > 0) {
      const com = await bcrypt.compare(loginDto.password, userLog[0].password);
      if (com) {
        return {
          id: userLog[0].id,
          phone: userLog[0].phone,
          role: userLog[0].role,
        };
      } else {
        return {
          error: -1,
        };
      }
    }
    return {
      error: -1,
    };
  }

  async findUserByRole(role: string) {
    const user = await this.userRepository.find({
      where: { role: role },
    });

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.find({
      where: { email: email },
    });

    return user[0];
  }
}
