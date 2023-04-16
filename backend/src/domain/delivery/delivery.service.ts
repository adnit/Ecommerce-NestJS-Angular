import { CreateDeliveryDto } from './../../common/dtos/delivery/create-delivery.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeliveryRepository } from './delivery.repository';
import { Delivery } from '../entities/delivery.entity';
import { UpdateDeliveryDto } from '../../common/dtos/delivery/update-delivery.dto';

@Injectable()
export class DeliveryService {
  private NotCreatedExceptionMessage = '';
  private NotFoundExceptionMessage = '';

  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const createdDelivery = await this.deliveryRepository.createDelivery(createDeliveryDto);
    console.log(createdDelivery.identifiers);

    if (!createdDelivery) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdDelivery.raw[0];
  }

  findAll(): Promise<Delivery[]> {
    return this.deliveryRepository.findAllDeliveries();
  }

  async findById(id: number): Promise<Delivery> {
    const deliveryExist = await this.deliveryRepository.findDeliveryById(id);

    if (!deliveryExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deliveryExist;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto): Promise<Delivery> {
    const updatedDelivery = await this.deliveryRepository.updateDelivery(id, updateDeliveryDto);

    if (!updatedDelivery.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedDelivery.raw[0];
  }

  async delete(id: number): Promise<Delivery> {
    const deletedDelivery = await this.deliveryRepository.deleteDelivery(id);

    if (!deletedDelivery.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedDelivery.raw[0];
  }
}
