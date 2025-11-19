import React from 'react';
import ProductCard from '../Components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'Matura IDE',
    description: 'Full-featured IDE for building Matura apps.',
    price: 99.99,
    discountPrice: 79.99,
    images: ['/default-product-image.jpg'],
    rating: 4.5,
    stock: 12,
    category: 'Developer Tools'
  },
  {
    id: 2,
    name: 'Matura CI',
    description: 'Continuous integration tailored for Matura projects.',
    price: 49.99,
    images: ['/default-product-image.jpg'],
    rating: 4.0,
    stock: 0,
    category: 'DevOps'
  },
  // add more sample products or fetch from your API
];

const Home = () => {
  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
    // TODO: integrate with cart state/service
  };

  const handleViewDetails = (product) => {
    alert(`View details for ${product.name}`);
    // TODO: navigate to product details route
  };

  return (
    <main>
      <header>
        <h1>Welcome to Matura — software for everything</h1>
        <p>Featured products and tools to power your projects.</p>
      </header>

      <section>
        <h2>Featured</h2>
        <div>
          {sampleProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;