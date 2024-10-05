import { ProgressBar } from "../progressBar/progressBar";
import styles from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <header>React App</header>
      {children}
      <footer>Test React application, 2024</footer>
    </div>
  );
};
