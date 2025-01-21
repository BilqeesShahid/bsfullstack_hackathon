import { Product } from '../../sanity.types';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { client } from '@/sanity/lib/client';

                                          

 
const BestSell = async () => {
  // Fetch top 3 products
  const query = `
    *[_type == "product"] | order(_createdAt asc)[0...3] {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      discount,
      stock,
      status,
      rating
    }
  `;
  const products: Product[] = await client.fetch(query);

  return (
    <div>
      <div className="flex justify-between items-center text-[22px] font-semibold mb-6">
        <h1>Best of Air Max</h1>
        <Link href="/">
          <button className="mr-12">Shop</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product.slug}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSell;
