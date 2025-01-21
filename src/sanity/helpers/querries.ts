import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`
  *[_type == "hero"] | order(title asc) {
    title,
    description,
    image {
      asset -> {
        url
      }
    },
    topSection {
      heading,
      subheading,
      descriptionLong
    },
    buttons[] {
      text,
      link
    }
  }
`); 

export const PRODUCTS_QUERY = defineQuery(`
   *[_type == "product"] | order(title asc)`)

 

export  const CATEGORIES_QUERY = defineQuery(
    `*[_type=="category"] | order(name asc)`
  );

export const PRODUCT_BY_SLUG = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
);
export const PRODUCT_SEARCH_QUERY = defineQuery(
  `*[_type == "product" && name match $searchParam] | order(name asc)`
);

export  const PRODUCT_BY_CATEGORY_QUERY = defineQuery(
  `*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`
);

export  const MY_ORDERS_QUERY =
defineQuery(`*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){
...,products[]{
  ...,product->
}
}`);
