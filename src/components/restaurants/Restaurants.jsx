import { Counter } from "../counter/counter";
import { ReviewForm } from "../reviewForm/reviewForm";
import { Reviews } from "../reviews/Reviews";

import { Menu } from "../menu/Menu";
export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!Boolean(name.length) || menu.length == 0) {
    return null;
  }

  return (
    <ul>
      <div>
        <h2 style={{ color: "#386890" }}>{name}</h2>
        <div>
          <h3>Menu</h3>
        </div>
        <Menu menu={menu} />
        <div>
          <h3>Reviews</h3>{" "}
        </div>
        <Reviews reviews={reviews} />

        <h3>Review Form</h3>
        <ReviewForm key={id} />
      </div>
    </ul>
  );
};
