import { Dispatch, SetStateAction } from "react";

interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface IProducts {
  products: IProduct[];
  count: number;
}

interface IProductsCardProps {
  product: IProduct;
}

interface IProductsCardPropsArray {
  products: IProductsCardProps[];
}

interface IStaticProps {
  products: IProducts;
}


interface IShopCartProps {
  isCartOpen: boolean;
  setIsCartOpen: () => void;
}