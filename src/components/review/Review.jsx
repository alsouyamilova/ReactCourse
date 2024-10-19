import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews";
import { selectUserById, selectUserRequestStatus } from "../../redux/users";
import { useEffect } from "react";
import { getUsers } from "../../redux/users/getUsers";
export const Review = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const review = useSelector((state) => selectReviewById(state, id));

  const { reviewId, userId, text, rating } = review;

  const user = useSelector((state) => selectUserById(state, userId));
  const requestStatus = useSelector(selectUserRequestStatus);
  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }
  return (
    <div key={reviewId}>
      <div>
        <span>
          <b>{user.name} </b>
        </span>{" "}
        {Array.from(Array(rating), (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <p>{text}</p>{" "}
    </div>
  );
};
