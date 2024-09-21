import { createElement } from "react";
import { createRoot } from "react-dom/client";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
import { restaurants } from "./data/mock";

root.render(
  <ul>
    {restaurants.map((rest) => (
      <div>
        <h1 style={{ color: "#386890" }}>{rest.name}</h1>

        <div>
          <h3>Menu</h3>
        </div>
        <ul>
          {rest.menu.map((dish) => (
            <>
              <li>
                <b style={{ color: "#4682b4" }}>{dish.name}</b> - ${dish.price}
              </li>
              <p>ingredients: {dish.ingredients.join(", ")}</p>
            </>
          ))}
        </ul>
        <div>
          <h3>Reviews</h3>{" "}
        </div>
        <ul>
          {rest.reviews.map((rev) => (
            <>
              <div>
                <span style={{ width: "30px" }}>
                  <b>{rev.user} </b>
                </span>{" "}
                <span>{Array(rev.rating).fill(<>⭐</>)} </span>
              </div>
              <p>{rev.text}</p>{" "}
            </>
          ))}
        </ul>
      </div>
    ))}
  </ul>
);
