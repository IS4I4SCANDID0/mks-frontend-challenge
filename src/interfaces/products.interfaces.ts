// interface IProducts {
//   id: number;
//   photo: string;
//   name: string;
//   description: string;
//   price: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface IStaticProps {
//   products: IProducts[];
//   count: number;
// }

// interface IProductsCardProps {
//   product: IProducts;
// }

// interface IProductsCardPropsArray {
//   products: IProductsCardProps[];
// }


interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
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
