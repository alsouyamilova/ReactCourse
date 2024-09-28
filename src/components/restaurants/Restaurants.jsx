import { Counter } from "../counter/counter";
import { ReviewForm } from "../reviewForm/reviewForm";
import { DishCounter } from "../counter/DishCounter";

export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!Boolean(name.length) | (menu.length == 0)) {
    return null;
  }

  return (
    <ul>
      <div>
        <h2 style={{ color: "#386890" }}>{name}</h2>
        <div>
          <h3>Menu</h3>
        </div>
        <ul>
          {menu.map((dish) => (
            <div key={dish.id}>
              <li>
                <b style={{ color: "#4682b4" }}>{dish.name}</b> - ${dish.price}{" "}
                <DishCounter key={id} />
              </li>
              <p>ingredients: {dish.ingredients.join(", ")}</p>
            </div>
          ))}
        </ul>
        <div>
          <h3>Reviews</h3>{" "}
        </div>

        <ul>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id}>
                <div>
                  <span style={{ width: "30px" }}>
                    <b>{review.user} </b>
                  </span>{" "}
                  {/* <span>{Array(review.rating).fill(<span key = >⭐</span>)} </span> */}
                  {Array.from(Array(review.rating), (_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p>{review.text}</p>{" "}
              </div>
            ))
          ) : (
            <>No reviews yet</>
          )}
        </ul>
        <h3>Review Form</h3>
        <ReviewForm key={id} />
      </div>
    </ul>
  );
};
