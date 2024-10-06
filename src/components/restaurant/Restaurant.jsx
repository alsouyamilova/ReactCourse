import { Counter } from "../counter/counter";
import { ReviewForm } from "../reviewForm/reviewForm";
import { Reviews } from "../reviews/Reviews";
import styles from "./Restaurant.module.css";
import { useThemeUser } from "../theme-context/useThemeUser";

import { Menu } from "../menu/Menu";
export const Restaurant = ({ id, name, menu, reviews }) => {
  const { user } = useThemeUser();
  if (!Boolean(name.length) || menu.length == 0) {
    return null;
  }

  return (
    <>
      <div>
        <h3 className={styles.divider}>Menu</h3>
      </div>
      <Menu menu={menu} />
      <div>
        <h3 className={styles.divider}>Reviews</h3>{" "}
      </div>
      <Reviews reviews={reviews} />
      {Boolean(user) ? <ReviewForm key={id} /> : null}
      <hr></hr>
    </>
  );
};
