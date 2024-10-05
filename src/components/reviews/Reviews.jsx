export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id}>
            <div>
              <span>
                <b>{review.user} </b>
              </span>{" "}
              {Array.from(Array(review.rating), (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p>{review.text}</p>{" "}
          </div>
        ))
      ) : (
        <>No reviews yet</>
      )}
    </ul>
  );
};
