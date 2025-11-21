export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  stock: number;
  brand: string;
}

const adjectives = ['Premium', 'Durable', 'Lightweight', 'Heavy-Duty', 'Compact', 'Waterproof', 'Marine-Grade', 'Essential', 'Advanced', 'Pro'];
const nouns = ['Anchor', 'Rope', 'Fender', 'Radio', 'GPS', 'Life Jacket', 'Compass', 'Bilge Pump', 'Cleat', 'Buoy', 'Winch', 'Propeller', 'Ladder', 'Seat', 'Cover'];
const brands = ['SeaSafe', 'AnchorMaster', 'NavTech', 'CommWave', 'RopeWorks', 'HullGuard', 'OceanPro', 'MarineBlue', 'DeepSea', 'WaveRider'];
const categories = ['Safety', 'Anchoring', 'Electronics', 'Docking', 'Maintenance', 'Navigation', 'Comfort'];

const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 1; i <= count; i++) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    products.push({
      id: i.toString(),
      name: `${adj} ${noun} ${i}`, // Added number to make names unique
      description: `This ${adj.toLowerCase()} ${noun.toLowerCase()} from ${brand} is perfect for your boating needs. High quality and reliable.`,
      price: parseFloat((Math.random() * 500 + 10).toFixed(2)),
      imageUrl: '/product-placeholder.svg',
      category: category,
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 to 5.0
      stock: Math.floor(Math.random() * 100),
      brand: brand,
    });
  }
  return products;
};

export const products: Product[] = generateProducts(50);

export function getProducts(page: number = 1, limit: number = 12): Product[] {
  const start = (page - 1) * limit;
  const end = start + limit;
  return products.slice(start, end);
}

export function getTotalProducts(): number {
  return products.length;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
