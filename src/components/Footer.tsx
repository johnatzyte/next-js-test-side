import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Nautical North
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Premium boating supplies for the modern sailor. Quality gear for your next adventure on the water.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md border-0 bg-gray-100 dark:bg-gray-800 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Nautical North. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
