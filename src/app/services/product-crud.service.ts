import { UpdateProductDto } from "../dtos/products.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  // instance generic, WITH ALL REQUEST
  // maybe Singleton
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto){
    // premises
    // logic business
    return this.http.update(id, dto);
  }

  async create(dto: Product) {}

  async get() {}
}
