import { Review } from "../review/Review";
export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((id) => (
          <Review key={id} id = {id}/>
        ))
      ) : (
        <>No reviews yet</>
      )}
    </ul>
  );
};
