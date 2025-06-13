import React from "react";
import { Share2 } from "lucide-react";
import { FamuqueButton } from "../FamuqueButton";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  description?: string;
  price?: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  showAddToCart: boolean;
  showShare: boolean;
}

export const FamuqueProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  oldPrice,
  discount,
  image,
  showAddToCart = true,
  showShare = true,
}) => {
  const navigate = useNavigate();


  return (
    <div 
      onClick={() => navigate(`/product/${id}`)}
      className="relative group w-full  bg-white overflow-hidden cursor-pointer">
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
        {showAddToCart && (
          <FamuqueButton 
            variant="little"
            onClick={e => {
              e.stopPropagation();
              // Add to cart logic here
            }}>
           Add to cart
          </FamuqueButton>
        )}
        {showShare && (
          <FamuqueButton
            variant="secondary"
            prepend_icon={<Share2 />}
            className="text-white"
            labelClassName="text-th-5"
            onClick={(e) => {
              e.stopPropagation();
              // Share logic here
            }}
          >
            Share
          </FamuqueButton>
        )}
      </div>
      
      <div className="p-4 bg-gray-lightest">
        <h3 className="text-gray-dark font-avenir-medium text-th-5">
          {name}
        </h3>
        <p className="text-gray font-avenir-light text-th-6">{description}</p>
        <div className="flex items-center gap-2 mt-1">
          {price && (
            <span className="text-gray-dark font-avenir-roman">
            {price}
            </span>
          )}
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
