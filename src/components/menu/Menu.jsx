import { DishCounter } from "../counter/DishCounter";
export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <div key={dish.id}>
          <li>
            <b style={{ color: "#4682b4" }}>{dish.name}</b> - ${dish.price}{" "}
            <DishCounter key={dish.id} />
          </li>
          <p>ingredients: {dish.ingredients.join(", ")}</p>
        </div>
      ))}
    </ul>
  );
};
