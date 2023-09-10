import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ProvidersName } from 'src/core/providers.enum';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @Inject(ProvidersName.CART_REPOSITORY)
    private cartRepository: Repository<Cart>,
  ) {}
  create(createCartDto: CreateCartDto) {
    try {
      return this.cartRepository.save(createCartDto);
    } catch (error) {
      return `Could not add to cart ${error}`
      
    }
    
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    try {
      return this.cartRepository.findOneBy({ id });
    } catch (error) {
      return `Could not find item ${error}`
      
    }
    
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    try {
      this.cartRepository.update(id, updateCartDto);
      return `Update Successful`;
    } catch (error) {
      return `Update failed ${error}`
    }
    
  }

  async remove(id: number) {
    try {
      var itemToRemove = await this.cartRepository.findOneBy({ id });
      if (itemToRemove) {
        await this.cartRepository.remove(itemToRemove);
      }

      return `This action removes a #${id} cart`;
    } catch (error) {
      return `Error occured could not complete the delete ${error}`;
    }
  }
}
