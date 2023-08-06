
import { Product } from './../models/product.model';
import { Category } from './../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  /**
   * En el código que proporcionas, Omit<Product, 'id' | 'category'> se utiliza para crear un nuevo tipo
   * llamado CreateProductDto que es similar al tipo Product, pero excluye las propiedades 'id' y 'category'.
   * Esto significa que el tipo CreateProductDto heredará todas las propiedades de Product excepto 'id' y 'category'.
   */
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
