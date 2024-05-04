import styles from "./loading.module.scss"

export const LoadingComponent = (): JSX.Element => {
  return (
    <p className={styles.loading}>Carregando...</p>
  )
}