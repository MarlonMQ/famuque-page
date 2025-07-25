import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface FamuqueCarouselProps {
  images: string[];
  slug: string;
  className?: string;
  canSlide?: boolean;
  autoSlide?: boolean;
  onDragFree?: boolean;
  loop?: boolean;
  disabled?: boolean;
}

export const FamuqueCarousel: React.FC<FamuqueCarouselProps> = ({ 
  images, 
  slug, 
  className, 
  canSlide = true, 
  autoSlide = false, 
  onDragFree = false,
  loop = false,
  disabled = false
}) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);
  const options = {
    align: "start" as const,
    loop: loop,
    slidesToScroll: 1,
    speed: 10,
    active: canSlide,
    dragFree: onDragFree,
  };
  const plugins = autoSlide ? [Autoplay({ delay: 4000 })] : [];
  
  if (!images || images.length === 0) {
    return <div>No hay imágenes disponibles.</div>;
  }


  return (
    <div 
      className={
        cn(
          className,
          "relative w-full max-w-minimal-2 select-none",
          `${disabled ? "pointer-events-none opacity-50" : ""}`
        )
      }>
      {/* Imagen principal */}
      <div className="w-full  aspect-square mb-4">
        <img
          src={mainImage}
          alt={`${slug} imagen principal`}
          className="w-full h-full object-contain aspect-square"
        />
      </div>

      {/* Carousel de miniaturas */}
      {images.length > 1 && (
        <Carousel
          opts={options}
          plugins={plugins}
          orientation="horizontal"
          className={`${!canSlide  ? "pointer-events-none opacity-50" : ""}`}
        >
          <CarouselContent className="flex">
            {images.map((imgUrl, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 tablet:basis-1/4 p-1" // 4 elementos visibles
              >
                <div
                  className={`aspect-square rounded-sm overflow-hidden hover:brightness-75 cursor-pointer transition duration-300 ${
                    imgUrl === mainImage ? "brightness-75" : ""
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${slug} imagen ${index + 1}`}
                    onClick={() => setMainImage(imgUrl)}
                    className="w-full h-full object-cover"
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Flechas */}
          <CarouselPrevious
            variant="default"
            className="absolute -left-6 text-black hover:text-gray"
          />
          <CarouselNext
            variant="default"
            className="absolute -right-6 text-black hover:text-gray"
          />
        </Carousel>
      )}
    </div>
  );
};
