import Link from 'next/link';
import Image from 'next/image';
import { getProducts, getTotalProducts } from '@/lib/products';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const page = typeof params.page === 'string' ? parseInt(params.page) : 1;
  const limit = 12;
  const products = getProducts(page, limit);
  const totalProducts = getTotalProducts();
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">New Arrivals</h1>
          <div className="flex items-center">
             <span className="text-sm text-gray-500 dark:text-gray-400">Showing {products.length} of {totalProducts} products</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 relative shadow-sm transition-all duration-300 group-hover:shadow-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="h-full w-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300 p-4 bg-white dark:bg-gray-800"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-semibold text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-gray-700">
                    {product.rating} ★
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-gray-300 font-medium">{product.brand}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.name}</p>
                </div>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                {page > 1 && (
                    <Link
                        href={`/?page=${page - 1}`}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-gray-800"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                        key={p}
                        href={`/?page=${p}`}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                            p === page
                                ? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800'
                        }`}
                    >
                        {p}
                    </Link>
                ))}
                {page < totalPages && (
                    <Link
                        href={`/?page=${page + 1}`}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-gray-700 dark:hover:bg-gray-800"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </Link>
                )}
            </nav>
        </div>
      </div>
    </div>
  );
}
