import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, blockContentType, productType, orderType, brandType, blogType, blogCategoryType, authorType, addressType],
}
