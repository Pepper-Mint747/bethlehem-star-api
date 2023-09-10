import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProvidersName } from 'src/core/providers.enum';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Cover } from 'src/cover/entities/cover.entity';
import { FileService } from 'src/file/file.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProvidersName.PRODUCT_REPOSITORY)
    private productRepository: Repository<Product>,
    @Inject(ProvidersName.COVER_REPOSITORY)
    private coverRepository: Repository<Cover>,
    @Inject(ProvidersName.FILE_REPOSITORY)
    private fileRepository: Repository<File>,
    private readonly fileService: FileService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      //return createProductDto;
      if (createProductDto.cover) {
        createProductDto.cover = await this.coverRepository.save(
          createProductDto.cover,
        );
      }

      if (createProductDto.file) {
        createProductDto.file = await this.fileService.create(
          createProductDto.file,
        );
      }

      //return createProductDto;
      return this.productRepository.save(createProductDto);
    } catch (error) {
      return `Could not add to product ${error}`;
    }
  }
  createMany(createProductDto: CreateProductDto[]) {
    try {
      createProductDto.forEach(async (element) => {
        this.create(element);
      });
      //return 'Creation successful';
      //return createProductDto;
      //return this.productRepository.save(createProductDto);
    } catch (error) {
      return `Could not add to product ${error}`;
    }
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    try {
      return this.productRepository.findOneBy({ id });
    } catch (error) {
      return `Could not find product ${error}`;
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    try {
      this.productRepository.update(id, updateProductDto);
      return `Update Successful`;
    } catch (error) {
      return `Update failed ${error}`;
    }
  }

  async remove(id: number) {
    try {
      var itemToRemove = await this.productRepository.findOneBy({ id });
      if (itemToRemove) {
        await this.productRepository.remove(itemToRemove);
      }

      return `#${id} product has been deleted`;
    } catch (error) {
      return `Error occured could not complete the delete ${error}`;
    }
  }
}
