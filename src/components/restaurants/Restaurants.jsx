import { Counter } from "../counter/counter";
export const Restaurant = ({ name, menu, reviews }) => {
  if(!Boolean(name.length) | menu.length == 0){
    return null
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
              <>
                <li>
                  <b style={{ color: "#4682b4" }}>{dish.name}</b> - $
                  {dish.price} <Counter/>
                </li>
                <p>ingredients: {dish.ingredients.join(", ")}</p>
              </>
            ))}
          </ul>
          <div>
            <h3>Reviews</h3>{" "}
          </div>
          
          <ul>
             { reviews.length > 0 ? reviews.map((rev) => (
              <>
                <div>
                  <span style={{ width: "30px" }}>
                    <b>{rev.user} </b>
                  </span>{" "}
                  <span>{Array(rev.rating).fill(<>⭐</>)} </span>
                </div>
                <p>{rev.text}</p>{" "}
              </>
            )) : <>No reviews yet</>}
          </ul>  
        </div>

    </ul>
  )
};
