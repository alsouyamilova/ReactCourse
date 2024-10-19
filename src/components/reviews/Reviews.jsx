import { Review } from "../review/Review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/reviews/getReviews";
import { useEffect } from "react";
import {
  selectReviewIds,
  selectRewiesRequestStatus,
} from "../../redux/reviews";
export const Reviews = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);
  const reviewIds = useSelector(selectReviewIds);
  const requestStatus = useSelector(selectRewiesRequestStatus);
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
