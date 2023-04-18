import { Injectable } from '@nestjs/common';
import { Order } from 'src/interfaces/interfaces';
import { orderFirst, orderScnd } from 'src/main/orders';

@Injectable()
export class OrderService {
  private orders: Order[] = [...orderFirst, ...orderScnd];

  getOrders() {
    return this.orders;
  }
}
