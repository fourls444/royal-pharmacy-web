import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="/images/favicon.png" className={styles.logo} />
        <div>
          <h1>ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</h1>
          <p>The Royal College of Pharmacy of Thailand</p>
        </div>
      </div>

    </header>
  );
}