import styles from "./shopCart.module.scss";

export const ShopCart = ({ isCartOpen, setIsCartOpen }: IShopCartProps): JSX.Element => {
  return (
    <div className={styles.cartContainer}>
      <div>
        <h2>Carrinho de compras</h2>
        <div onClick={setIsCartOpen}>
          <span>X</span>
        </div>
      </div>
    </div>
  );
};
