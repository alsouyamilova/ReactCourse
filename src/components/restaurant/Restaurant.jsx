import { ReviewForm } from "../reviewForm/reviewForm";
import { Reviews } from "../reviews/Reviews";
import styles from "./Restaurant.module.css";
import { useUser } from "../user-context/useUser";
import { Menu } from "../menu/Menu";
import { selectRestaurantById } from "../../redux/restaurants";
import { useSelector } from "react-redux";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, menu, reviews } = restaurant || {};

  const { user } = useUser();
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
