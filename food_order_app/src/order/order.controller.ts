import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from 'src/dto/dto';

interface IdRouteParams {
  id: string;
}

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  // localhost:3000/orders/some_id
  @Get(':id')
  findOne(@Param() params: IdRouteParams) {
    const id: string = params.id;
    const order = this.orderService.findOne(id);

    if (!order) {
      throw new HttpException(
        `Task with id: ${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return order;
  }

  // localhost:3000/orders
  @Post()
  create(@Body() body: OrderDto) {
    const id = this.orderService.createOrder(body);

    return {
      message: `Order was created.`,
      id: id,
    };
  }
}
