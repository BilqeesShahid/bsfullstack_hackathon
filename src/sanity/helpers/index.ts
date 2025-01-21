import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, HERO_QUERY, MY_ORDERS_QUERY, PRODUCTS_QUERY,PRODUCT_BY_CATEGORY_QUERY,PRODUCT_BY_SLUG,PRODUCT_SEARCH_QUERY } from "./querries";

export const getHero = async() => {
  try {
    const products = await sanityFetch({
      query:HERO_QUERY,
    })
    return products?.data || [];
  } catch (error) {
    console.error("error fetching hero data:" , error);
    return [];
  }
}

 

export const getAllProducts = async () => {

  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};

export const getAllCategories = async () => {
   
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories.data || [];
  } catch (error) {
    console.log("Error fetching all categories:", error);
    return [];
  }
};
export const getProductBySlug = async (slug: string) => {
  
 

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const searchProductsByName = async (searchParam: string) => {
  

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}`,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by name:", error);
    return [];
  }
};
export const getProductsByCategory = async (categorySlug: string) => {
  
  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Erroor fetching products by category:", error);
    return [];
  }
};

export const getMyOrders = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });
    return orders?.data || [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};