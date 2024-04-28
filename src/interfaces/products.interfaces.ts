interface IProducts {
    id: number,
    img: string,
    name: string,
    description: string,
    price: number
}


interface IStaticProps {
  products: IProducts[],
  count: number
}


interface IProductsCardProps {
  product: IProducts
}