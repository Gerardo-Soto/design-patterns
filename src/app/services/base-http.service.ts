import axios from 'axios';

import { Category } from '../models/category.model'
import { Product } from '../models/product.model'
import { UpdateProductDto } from '../dtos/products.dto';


export class BaseHttpService<T> {
  constructor(
    private url: string
  ) {}

  /**
   *
   * @returns List[T] | Promise[T]
   */
  // getAll generic
  //getAll(): T[] | Promise<T[]> {
  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  /**
   *
   * @param id
   * @param changes
   * @returns Product | Promise<Product>
   */
  // update generic
  //async update(id: Product['id'], changes: UpdateProductDto) {
  async update<TypeMethodID, DTO>(id: TypeMethodID, changes: DTO) {
    const data = await axios.put('', changes);
    return data;
  }
}

const urlProduct = 'https://api.escuelajs.co/api/v1/products';
const productService = new BaseHttpService<Product>(urlProduct);

const urlCategories = 'https://api.escuelajs.co/api/v1/categories';
const categoryService = new BaseHttpService<Category>(urlCategories);



(async() => {
  const responseProduct = await productService.getAll();
  console.log(responseProduct);


  const responseProductUpdate = await productService.update<Product["id"], UpdateProductDto>(1, {
    title: 'pc',
    price: 599
  });

  //const responseCategory = await categoryService.getAll();
  //console.log(responseCategory, responseCategory.length);

})();
