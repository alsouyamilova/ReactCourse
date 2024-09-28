import { ProgressBar } from "../progressBar/progressBar";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header>React App</header>
      {children}
      <hr></hr>
      <footer>Test React application, 2024</footer>
    </>
  );
};
