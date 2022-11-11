import ProductList from './(shop-components)/ProductList';
import { Product } from '@/types/index';

async function getProducts() {
  const res = await fetch('http://localhost:5000/api/Products');
  const products: Product[] = await res.json();
  return products;
}

export default async function Shop() {
  const products = await getProducts();
  return (
    <div>
      <h1>SHOP</h1>
      <ProductList initialProducts={products} />
    </div>
  );
}
