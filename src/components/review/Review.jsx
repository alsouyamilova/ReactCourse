import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/reviews";
import { selectUserById } from "../../redux/users";
export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { reviewId, userId, text, rating } = review;
  const user = useSelector((state) => selectUserById(state, userId));
  const { name } = user;
  return (
    <div key={reviewId}>
      <div>
        <span>
          <b>{name} </b>
        </span>{" "}
        {Array.from(Array(rating), (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
      <p>{text}</p>{" "}
    </div>
  );
};
