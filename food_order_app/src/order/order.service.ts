import { Injectable } from '@nestjs/common';
import { OrderDto } from 'src/dto/dto';
import { Order } from 'src/interfaces/interfaces';
// import { orderFirst, orderScnd } from 'src/main/orders';
import { v4 as uuid } from 'uuid';
import { OrderEntity } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  @InjectRepository(OrderEntity)
  private readonly ordersRepository: Repository<OrderEntity>;

  getOrders() {
    return this.ordersRepository;
  }

  async findOne(id: string) {
    const order = await this.ordersRepository.findOne({ where: { id: id } });
    return order;
  }

  async createOrder(orderDto: OrderDto) {
    const order: Order = {
      ...orderDto,
      id: uuid(),
      placedAt: new Date(orderDto.placedAt).getTime(),
    };

    const orderCreated = this.ordersRepository.create(order);
    const orderSaved = await this.ordersRepository.save(orderCreated);
    console.log(orderSaved);
    return order.id;
  }

  updateOne(id: string) {}
}
