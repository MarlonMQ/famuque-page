import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FamuqueBackground from "@/assets/background/famuque-background--1.jpg";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variants?: "default" | "product";
}

export const FamuqueHeader: React.FC<BreadcrumbProps> = ({
  items,
  variants = "default",
}) => {
  if (variants === "product") {
    return (
      <nav className="w-full flex justify-center bg-famuque-lightest text-th-4 tablet:text-th-3">
        <div className="w-full max-w-screen-desktop mx-std-3 my-comp-1 flex items-center space-x-std-2 ">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2  font-avenir-roman">
              {index !== 0 && <ChevronRight className="w-4 h-4 text-black" />}
              {item.href && !isLast && (
                <Link to={item.href} className="text-gray hover:text-black transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
        {/* Línea divisoria */}
        <div className="mx-4 h-std-3-tablet border-l border-gray " />
        {/* Último elemento como título */}
        <span className="text-black  font-avenir-medium">
          {items[items.length - 1].label}
        </span>
        </div>  
      </nav>
    );
  }

  // Variante por defecto
  return (
    <nav className="relative flex flex-col items-center gap-std-3 justify-center w-full h-strap-mobile tablet:h-strap overflow-hidden">
      <img src={FamuqueBackground} alt="Famuque" className="absolute w-full h-full object-cover opacity-80" />
      <label className="text-ggh-5 font-avenir-medium text z-10">
        {items[items.length - 1].label}
      </label>
      <div className="flex items-center justify-center space-x-2 z-10">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2 text-mh-2 font-avenir-roman">
              {index !== 0 && <ChevronRight className="w-4 h-4 text-black" />}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:underline hover:text-gray-dark transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-black">{item.label}</span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
