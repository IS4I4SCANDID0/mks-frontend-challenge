import { useState } from "react";
import styles from "./header.module.scss"
import { TiShoppingCart } from "react-icons/ti";
import { ShopCart } from "../ShopCart/shopCart";

export const Header = (): JSX.Element => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  return (
    <header className={styles.headerContainer}>
      <div>
        <h1>MKS</h1>
        <h3>Sistemas</h3>
      </div>
      <button onClick={() => setIsCartOpen(true)}>
        <TiShoppingCart color="#000000" size={18} />
        <span>0</span>
      </button>
      {isCartOpen ? (
        <ShopCart isCartOpen={isCartOpen} setIsCartOpen={() => setIsCartOpen(false)} />
      ) : (
        <></>
      )}
    </header>
  );
};
