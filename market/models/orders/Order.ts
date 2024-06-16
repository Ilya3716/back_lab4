import Product from "../products/Product";
import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export type OrderAttributes = {
  id: Number;
  productId: Number;
  userId: Number;
  count: Number;
};

export type OrderCreationAttributes = Optional<OrderAttributes, "id">;

@Table
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: Number;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column({ onDelete: "CASCADE" })
  productId: Number;

  @BelongsTo(() => Product)
  product: Number;

  @AllowNull(false)
  @Column
  userId: Number;

  @AllowNull(false)
  @Column
  count: Number;
}

export default Order;
