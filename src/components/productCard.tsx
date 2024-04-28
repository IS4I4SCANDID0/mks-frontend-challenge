import Image from "next/image"

export const ProductCard = ({ product }: IProductsCardProps): JSX.Element => {
  return (
    <li>
      <div>
        <Image src={product.img} alt={product.name} width={100} height={90} />
        {/* <img src={product.img} alt="" /> */}
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <span>{product.price}</span>
    </li>
  )
}