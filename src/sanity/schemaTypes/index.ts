import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { order } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType,productType, categoryType,order],
}
