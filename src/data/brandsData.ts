const images = import.meta.glob("@/assets/brands/*.webp", { eager: true });

export const brandsData = Object.values(images).map((image) => (image as { default: string }).default);