import { Inject, Injectable } from '@nestjs/common';
import { ProvidersName } from 'src/core/providers.enum';
import { File } from 'src/file/entities/file.entity';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FileService {
  constructor(
    @Inject(ProvidersName.FILE_REPOSITORY)
    private fileRepository: Repository<File>,
  ) {}
  create(createFileDto: CreateFileDto) {
    try {
     
      return this.fileRepository.save(createFileDto);
    } catch (error) {

      throw new Error( `Could not add to file ${error}`);
    }
  }
  createMany(createFileDto: CreateFileDto[]) {
    try {
      return this.fileRepository.save(createFileDto);
    } catch (error) {
      return `Could not add to file ${error}`;
    }
  }

  findAll() {
    return this.fileRepository.find();
  }

  findOne(id: number) {
    try {
      return this.fileRepository.findOneBy({ id });
    } catch (error) {
      return `Could not find file ${error}`;
    }
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    try {
      this.fileRepository.update(id, updateFileDto);
      return `Update Successful`;
    } catch (error) {
      return `Update failed ${error}`;
    }
  }

  async remove(id: number) {
    try {
      var itemToRemove = await this.fileRepository.findOneBy({ id });
      if (itemToRemove) {
        await this.fileRepository.remove(itemToRemove);
      }

      return `#${id} file has been deleted`;
    } catch (error) {
      return `Error occured could not complete the delete ${error}`;
    }
  }
}
