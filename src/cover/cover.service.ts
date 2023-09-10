import { Inject, Injectable } from '@nestjs/common';
import { CreateCoverDto } from './dto/create-cover.dto';
import { UpdateCoverDto } from './dto/update-cover.dto';
import { ProvidersName } from 'src/core/providers.enum';
import { Repository } from 'typeorm';
import { Cover } from './entities/cover.entity';

@Injectable()
export class CoverService {
  constructor(
    @Inject(ProvidersName.COVER_REPOSITORY)
    private coverRepository: Repository<Cover>,
  ) {}
  create(createCoverDto: CreateCoverDto) {
    try {
      return this.coverRepository.save(createCoverDto);
    } catch (error) {
      return `Could not add to cover ${error}`;
    }
  }
  createMany(createCoverDto: CreateCoverDto[]) {
    try {
      return this.coverRepository.save(createCoverDto);
    } catch (error) {
      return `Could not add to cover ${error}`;
    }
  }

  findAll() {
    return this.coverRepository.find();
  }

  findOne(id: number) {
    try {
      return this.coverRepository.findOneBy({ id });
    } catch (error) {
      return `Could not find cover ${error}`;
    }
  }

  update(id: number, updateCoverDto: UpdateCoverDto) {
    try {
      this.coverRepository.update(id, updateCoverDto);
      return `Update Successful`;
    } catch (error) {
      return `Update failed ${error}`;
    }
  }

  async remove(id: number) {
    try {
      var itemToRemove = await this.coverRepository.findOneBy({ id });
      if (itemToRemove) {
        await this.coverRepository.remove(itemToRemove);
      }

      return `#${id} cover has been deleted`;
    } catch (error) {
      return `Error occured could not complete the delete ${error}`;
    }
  }
}
