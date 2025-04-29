import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FamuqueBackground from "@/assets/background/famuque-background--1.jpg"

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const FamuqueHeader: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex flex-col items-center gap-std-3 justify-center w-full h-strap-mobile tablet:h-strap ">
      <img src={FamuqueBackground} alt="Famuque" className="absolute w-full h-screen object-cover -z-10 opacity-80 " />

      <label className="text-ggh-5 font-avenir-medium text">
        {items[items.length - 1].label}
      </label>
      <div className="flex items-center justify-center space-x-2 ">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center space-x-2 text-mh-2 font-avenir-roman">
              {index !== 0 && <ChevronRight className="w-4 h-4 text-black" />}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:underline hover:text-gray transition-colors "
                >
                  {item.label}
                </Link>
              ) : (
                <span className=" text-black">{item.label}</span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
