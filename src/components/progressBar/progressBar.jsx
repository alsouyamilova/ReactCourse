import classes from "./ProgressBar.module.css";
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(window.scrollY);

  useEffect(() => {
    const calculateProgress = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
        setScrollBarPosition(Math.floor((window.scrollY / pageHeight) * 100));
    };
    window.addEventListener("scroll", () => calculateProgress());
    return () => {
      window.removeEventListener("scroll", calculateProgress);
    };
  }, [scrollBarPosition]);

  return (
    <div
      className={classes.progressbar}
      style={{ width: `${scrollBarPosition}%` }}
    ></div> // This is our
  );
};
