import { Review } from "../review/Review";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
export const Reviews = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { reviews } = restaurant || {};
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((id) => <Review key={id} id={id} />)
      ) : (
        <>No reviews yet</>
      )}
    </ul>
  );
};
