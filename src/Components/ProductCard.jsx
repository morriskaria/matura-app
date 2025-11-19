// ...existing code...
import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  if (!product) {
    return (
      <div>
        <div>
          <img src="/placeholder-image.jpg" alt="Product not available" loading="lazy" />
        </div>
        <div>
          <h3>Product not available</h3>
          <p>This product is currently unavailable.</p>
        </div>
      </div>
    );
  }

  const {
    name = 'Unnamed Product',
    description = 'No description available',
    price = 0,
    discountPrice,
    images = [],
    rating = 0,
    stock = 0,
    category = 'Uncategorized'
  } = product;

  const firstImage = images.length > 0 ? images[0] : '/default-product-image.jpg';
  const discountPercent = discountPrice && price > 0
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  const handleImageError = () => setImageError(true);
  const handleAddToCart = () => stock > 0 && onAddToCart && onAddToCart(product);
  const handleViewDetails = () => onViewDetails && onViewDetails(product);

  const formatPrice = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <div>
      <div>
        {discountPercent > 0 && <div>-{discountPercent}%</div>}
        <img
          src={imageError ? '/default-product-image.jpg' : firstImage}
          alt={name}
          onError={handleImageError}
          loading="lazy"
        />
        <div>
          <button type="button" onClick={handleAddToCart} disabled={stock === 0}>
            {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div>
        <div>{category}</div>
        <h3>{name}</h3>
        <p>{description}</p>

        {rating > 0 && <div>Rating: {rating.toFixed(1)}</div>}

        <div>
          {discountPrice ? (
            <>
              <span>{formatPrice(discountPrice)}</span>
              <span>{formatPrice(price)}</span>
            </>
          ) : (
            <span>{formatPrice(price)}</span>
          )}
        </div>

        <button type="button" onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
// ...existing code...