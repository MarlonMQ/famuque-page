import React from "react";
import { Heart, Share2, Shuffle } from "lucide-react";
import { FamuqueButton } from "../FamuqueButton";

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
      <img
        src={image}
        alt={name}
        className="w-full h-strap object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {discount && (
        <div className="absolute top-4 right-4 bg-[var(--color-error)] text-white text-sm font-semibold px-3 py-1 rounded-full">
          {discount}
        </div>
      )}

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-std-2">
        <FamuqueButton variant="little">
          Add to cart
        </FamuqueButton>
        <div className="flex gap-4 text-white text-sm">
          <FamuqueButton
            variant="secondary"
            prepend_icon={<Share2/>}
            className="text-white "
            labelClassName="text-th-5"
          >
            Share
          </FamuqueButton>
        </div>
      </div>

      
      <div className="p-4 bg-gray-lightest">
        <h3 className="text-gray-dark font-avenir-medium text-th-5">
          {name}
        </h3>
        <p className="text-gray font-avenir-light text-th-6">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-dark font-avenir-roman">
            {price}
          </span>
          {oldPrice && (
            <span className="text-gray line-through font-avenir-roman">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
