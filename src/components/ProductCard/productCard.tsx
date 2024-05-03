import Image from "next/image";
import styles from "../ProductCard/productCard.module.scss"
import { FiShoppingBag } from "react-icons/fi";

export const ProductCard = ({ product }: IProductsCardProps): JSX.Element => {
  return (
    <li className={styles.listCard}>
      <div>
        <Image src={product.photo} alt={product.name} width={90} height={90} 
          priority={true}
        />
      </div>
      <div>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        {/*!!!!!! <span>{product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span> ///formatar preço*/}
      </div>
      <button>
        <FiShoppingBag color="#FFFFFF" />
        Comprar
      </button>
    </li>
  );
};
