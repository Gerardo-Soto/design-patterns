// class-validator: IsEmail = decorator, isEmail = function
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from "class-validator";
import { AccessType, Category } from "../models/category.model";



export interface InterfaceCreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements InterfaceCreateCategoryDto {
  //name: string;// Property name|image has no initializer and is not definitely assigned in the constructor
  // name!: = initialize this variable later
  @Length(4,50)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;

}


(async() => {
  const dto = new CreateCategoryDto();
  dto.name = 'G';

  try {
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('finally: next');
  }
})()
