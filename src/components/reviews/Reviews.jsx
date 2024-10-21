import { Review } from "../review/Review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantReviews } from "../../redux/reviews/getRestaurantReviews";
import { useEffect } from "react";
import {
  selectReviewIds,
  selectReviewsRequestStatus,
} from "../../redux/reviews";
import { getUsers } from "../../redux/users/getUsers";
export const Reviews = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantReviews(restaurantId));
    dispatch(getUsers());
  }, [dispatch, restaurantId]);


  const reviewIds = useSelector(selectReviewIds);
  const requestStatus = useSelector(selectReviewsRequestStatus);
  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }
  return (
    <ul>
      {reviewIds.length > 0 ? (
        reviewIds.map((id) => <Review key={id} id={id} />)
      ) : (
        <>No reviews yet</>
      )}
    </ul>
  );
};
