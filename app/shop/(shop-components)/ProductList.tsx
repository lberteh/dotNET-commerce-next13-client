'use client';
import { useState } from 'react';
import Image from 'next/image';

import { Product } from '@/types/index';

// props type
type Props = { initialProducts: Product[] };

export default function ProductList({ initialProducts }: Props) {
  const [products, setProducts] = useState(initialProducts);
  return (
    <ul className="grid grid-cols-6 gap-5">
      {products.map((product) => (
        <li key={product.id} className="relative">
          <Image
            src={product.pictureUrl}
            alt={product.name}
            width={400}
            height={400}
            priority
          />
          <h2>{product.name}</h2>
        </li>
      ))}
    </ul>
  );
}
