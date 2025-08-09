import { ComponentProps } from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

import { cn } from "@/lib/utils";

interface FamuqueMarqueeProps extends ComponentProps<typeof Marquee> {
  contentClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
  images: string[];
}

export function FamuqueMarquee({className, contentClassName, itemClassName, imageClassName, images, ...props} : FamuqueMarqueeProps) {
  return (
    <Marquee className={cn("select-none pointer-events-none",className)} {...props}>
        <MarqueeFade side='left'/>
        <MarqueeFade side='right'/>
        <MarqueeContent  pauseOnHover={false} className={contentClassName}>
            {images.map((image, index) => (
                <MarqueeItem key={index} className={itemClassName}>
                    <img src={image} alt={`Marquee Image ${index}`} className={imageClassName} />
                </MarqueeItem>
            ))}
        </MarqueeContent>
    </Marquee>
  );
}