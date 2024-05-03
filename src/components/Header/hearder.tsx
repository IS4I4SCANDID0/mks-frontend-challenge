import Image from "next/image";
import styles from "./header.module.scss";
import cartVector from "../../public/Vector.svg"
import { TiShoppingCart } from "react-icons/ti";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <h1>MKS</h1>
        <h3>Sistemas</h3>
      </div>
      <button>
        {/* <Image src={cartVector} alt="cart"/> */}
        <TiShoppingCart color={``} size={80}/>
        <span>0</span>
      </button>
    </header>
  );
};
