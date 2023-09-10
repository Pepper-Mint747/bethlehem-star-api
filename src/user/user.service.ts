import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProvidersName } from 'src/core/providers.enum';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(ProvidersName.USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    try {
      return this.userRepository.save(createUserDto);
    } catch (error) {
      return `Could not add to user ${error}`;
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    try {
      return this.userRepository.findOneBy({ id });
    } catch (error) {
      return `Could not find item ${error}`;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.userRepository.update(id, updateUserDto);
      return `Update Successful`;
    } catch (error) {
      return `Update failed ${error}`;
    }
  }

  async remove(id: number) {
    try {
      var itemToRemove = await this.userRepository.findOneBy({ id });
      if (itemToRemove) {
        await this.userRepository.remove(itemToRemove);
      }

      return ` #${id} was removed`;
    } catch (error) {
      return `Error occured could not complete the delete ${error}`;
    }
  }
}
