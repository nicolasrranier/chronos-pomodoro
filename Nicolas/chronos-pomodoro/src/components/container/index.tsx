import styles from "./style.module.css"

export function Container() {
  return (
    <>
      {/*LOGO */}
      <div className={styles.container}>
        <div className={styles.content}>
          <section>LOGO</section>
        </div>
      </div>
      {/*MENU */}
      <div className={styles.container}>
        <div className={styles.content}>
          <section>MENU</section>
        </div>
      </div>
      {/*FORMULÁRIO */}
      <div className={styles.container}>
        <div className={styles.content}>
          <section>FORMULÁRIO</section>
        </div>
      </div>
      {/*RODAPÉ */}
      <div className={styles.container}>
        <div className={styles.content}>
          <section>RODAPÉ</section>
        </div>
      </div>
    </>
  );
}
