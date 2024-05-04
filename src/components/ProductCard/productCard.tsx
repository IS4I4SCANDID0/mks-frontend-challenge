import Image from "next/image";
import styles from "../ProductCard/productCard.module.scss"
import { FiShoppingBag } from "react-icons/fi";

export const ProductCard = ({ product }: IProductsCardProps): JSX.Element => {
  let priceConverted: number = Number(product.price)

  return (
    <li className={styles.listCard}>
      <div className={styles.listCardImg}>
        <Image src={product.photo} alt={product.name} width={90} height={90} 
          priority={true}
          // fetchPriority={undefined}
        />
      </div>
      <div>
        <div className={styles.productInfo}>
          <h2>{product.name}</h2>
          <span>{priceConverted.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span> 
        </div>
          <p>{product.description}</p>
      </div>
      <button>
        <FiShoppingBag color="#FFFFFF" size={20} />
        Comprar
      </button>
    </li>
  );
};