 import { getAllCategories, getProductsByCategory } from "@/sanity/helpers";
import React from "react";
import CategorySelector from "@/components/ui/CategorySelector";
import ProductCard from "@/components/ProductCard";
import { BiRectangle } from "react-icons/bi";
interface Props {
  params: Promise<{ slug: string }>;
}

const CategoriesPage = async ({ params }: Props) => {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();
  return (
    <> 
    <div className="flex  items-center justify-between mb-10">
    <h1 className="text-[24px] font-medium">New (500)</h1>
        <h1 className="text-lg lg:text-2xl md:text-3xl font-bold">
          {" "}
          <span className="text-gray-600 capitalize">
            {slug
              .split("-")
              .map((word) => word)
              .join(" ")}{" "}
            Collection
          </span>
        </h1>
        <div>
        <select
            className="text-black text-[12px] lg:text-[15px] px-2 py-1 w-[86px] h-[28px] md:w-auto"
            name="Sorting"
            id="Sorting"
          >
            <option value="Sortby">Sort by</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        </div>
        <div className="flex lg:gap-4"> 
        <div>
        <CategorySelector categories={categories}/>
        <div className="mt-12 border-t-2 border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Gender</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Men</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Women</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Unisex</h3>
            </div>
          </div>
          <div className="mt-12  border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Kids</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Boys</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Girls</h3>
            </div>
            </div>
            <div className="mt-12  border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Shop By Price</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Under ₹ 2 500.00</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>₹ 2 501.00 &#45; ₹ 7 500.00</h3>
            </div>
            </div>

        </div>
        <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
  {products.map((product) => (
    <ProductCard key={product?._id} product={product} />
  ))}
</div>
</div>

      
     
    </>
  );
};

export default CategoriesPage;