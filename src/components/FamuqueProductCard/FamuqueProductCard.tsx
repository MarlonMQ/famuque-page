import React from "react";
import { Heart, Share2, Shuffle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
}

export const FamuqueProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  oldPrice,
  discount,
  image,
}) => {
  return (
    <div className="relative group w-full  bg-white overflow-hidden ">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-strap object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Discount badge */}
      {discount && (
        <div className="absolute top-4 right-4 bg-[var(--color-error)] text-white text-sm font-semibold px-3 py-1 rounded-full">
          {discount}
        </div>
      )}

      {/* Hover Layer */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-[var(--color-famuque)] px-6 py-2 font-medium rounded-sm mb-4">
          Add to cart
        </button>
        <div className="flex gap-4 text-white text-sm">
          <div className="flex items-center gap-1">
            <Share2 size={16} /> <span>Share</span>
          </div>
          <div className="flex items-center gap-1">
            <Shuffle size={16} /> <span>Compare</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart size={16} /> <span>Like</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-gray-lightest">
        <h3 className="text-[var(--color-gray-dark)] font-semibold text-lg">
          {name}
        </h3>
        <p className="text-[var(--color-gray)] text-sm">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[var(--color-gray-dark)] font-semibold">
            {price}
          </span>
          {oldPrice && (
            <span className="text-[var(--color-gray)] line-through text-sm">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
