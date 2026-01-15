export type Product = {
  id: number;
  name: string;
  price: number;
  image: string | React.FC<React.SVGProps<SVGSVGElement>>;
  category?: string;
  slug?: string;
};
