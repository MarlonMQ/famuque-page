export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  distributorPrice?: string;
  discount?: string;
  link: string;
  slug: string;
  stock?: number;
  sku?: string;
  brand?: string;
  features?: string[];
  onlyCatalog?: boolean;
  details?: { 
    product_id: number;
    code: string;
    size_description: string;
    pack_qty: number;
    total_qty: number;
  }[] | undefined;
}