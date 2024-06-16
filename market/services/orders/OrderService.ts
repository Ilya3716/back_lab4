// services/orderService.ts
import {
  Order,
  OrderAttributes,
  OrderCreationAttributes,
} from "../../models/orders/Order";
import OrderRepository from "../../repositories/orders/OrderRepository";

class OrderService {
  private readonly orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async create(userData: OrderCreationAttributes): Promise<Order> {
    return await this.orderRepository.create(userData);
  }

  async getAll(): Promise<Order[]> {
    return await this.orderRepository.findAll();
  }

  async delete(orderId: number): Promise<number> {
    return await this.orderRepository.delete(orderId);
  }

  async findById(orderId: number): Promise<Order> {
    const order = await this.orderRepository.findById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }

  async findByUser(userId: Number): Promise<Order[]> {
    // console.log(userId);
    const orders = await this.orderRepository.findByUser(userId);
    if (orders.length === 0) {
      throw new Error("Orders not found");
    }
    return orders;
  }

  async findByProduct(productId: string): Promise<Order[]> {
    const orders = await this.orderRepository.findByProduct(productId);
    if (orders.length === 0) {
      throw new Error("Orders not found");
    }
    return orders;
  }
}

export default OrderService;
