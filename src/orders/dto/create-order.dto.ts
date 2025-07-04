export class CreateOrderDto {
  userId: number;
  restaurantId: number;
  total: number;
  status: string;
  createdAt: Date;
}
