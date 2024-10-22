import { Review } from "../review/Review";
import { useParams } from "react-router-dom";
import { useGetRestaurantReviewsQuery } from "../../redux/services/api/api";
export const Reviews = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } = useGetRestaurantReviewsQuery(restaurantId);
  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  if (!data?.length) {
    return null;
  }
  return (
    <ul>
      {Object.values(data).length > 0 ? (
        data.map(({id, userId, rating, text}) => <Review key={id} id={id} userId={userId} rating={rating} text={text}/>)
      ) : (
        <>No reviews yet</>
      )}
    </ul>
  );
};
