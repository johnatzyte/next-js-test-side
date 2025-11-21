import { getProductById, getProducts } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="h-full w-full object-contain object-center p-12"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h1>

            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-indigo-600 dark:text-indigo-400 font-semibold">${product.price}</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm font-medium text-yellow-700 dark:text-yellow-500">{product.rating}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">out of 5 stars</span>
                </div>
            </div>

            <div className="mt-8">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Brand</dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{product.brand}</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">{product.category}</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Stock</dt>
                        <dd className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${product.stock > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                            </span>
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="mt-10 flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                    Add to Cart
                </button>
                <button className="flex-1 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                    Buy Now
                </button>
            </div>

            <div className="mt-6 flex justify-center">
               <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1">
                  <span>&larr;</span> Back to products
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
