import React from "react";
import { Share2 } from "lucide-react";
import { FamuqueButton } from "../FamuqueButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/routes";

interface ProductProps {
  slug: string;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  link: string;
}

interface ProductCardProps {
  product: ProductProps;
  showAddToCart?: boolean;
  showShare?: boolean;
}

export const FamuqueProductCard: React.FC<ProductCardProps> = ({
  product,
  showAddToCart = true,
  showShare = true,
}) => {
  const navigate = useNavigate();


  return (
    <div 
      onClick={() => navigate(ROUTES.DYNAMIC.product(product.slug))}
      className="relative group w-full bg-white overflow-hidden cursor-pointer max-w-strap hover:scale-110 stransition-all duration-300"
    >
      <div className="relative h-strap-tablet w-full flex items-center justify-center">
        <img
          src={product.link + "images/main.png"}
          alt={product.name}
          className="h-full object-cover transition-transform duration-300"
        />
      </div>

      {product.discount && (
        <div className="absolute top-4 right-4 bg-[var(--color-error)] text-white text-sm font-semibold px-3 py-1 rounded-full">
          {product.discount}
        </div>
      )}

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 gap-std-2">
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
      
      <div className="p-4 bg-gray-lightest min-h-comp-3-desktop">
        <h3 className="text-gray-dark font-avenir-medium text-mh-3 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray font-avenir-medium text-dh-6 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mt-1">
          {product.price && (
            <span className="text-gray-dark font-avenir-roman">
            {product.price}
            </span>
          )}
          {product.oldPrice && (
            <span className="text-gray line-through font-avenir-roman">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
