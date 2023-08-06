import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dtos/products.dto"; '../dtos/products.dto';
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";


export class ProductHttpService implements ProductService {
  private url = "https://api.escuelajs.co/api/v1/products";

  // Singleton: for each request, don't create an object of ProductHttpServices
  private static instance: ProductHttpService | null = null;

  private constructor (){}

  public static create(){
    if (ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService();
    }
    return ProductHttpService.instance;
  }


  async getAll() {
    const products = await axios.get<Product[]>(this.url)
    return products.data;
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const updateProduct = await axios.put<Product>(`${this.url}/${id}`, changes);
    return updateProduct.data;
  }
  async create(dto: CreateProductDto) {
    const createProduct = await axios.post<Product>(this.url, dto);
    return createProduct.data;
  }
  async findOne(id: number) {
    const findOneProduct = await axios.get(`${this.url}/${id}`);
    return findOneProduct.data;
  }
}
