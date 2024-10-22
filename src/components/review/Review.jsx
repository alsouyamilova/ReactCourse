import {
  useEditReviewMutation,
  useGetRestaurantReviewsQuery,
  useGetUsersQuery,
} from "../../redux/services/api/api";
import { useTheme } from "../theme-context/useTheme";
import { useUser } from "../user-context/useUser";
import styles from "../reviewForm/Form.module.css";
import classNames from "classnames";
import { useState } from "react";
import { Counter } from "../counter/counter";
export const Review = ({ id, userId, rating, text }) => {
  const { theme } = useTheme();
  const { user } = useUser();
  const { userFromServer, isLoading, isError } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      userFromServer: data?.find((user) => user.id === userId),
    }),
  });
  const [editReview] = useEditReviewMutation();
  const [editState, setEditState] = useState(false);
  const [editedRating, setEditedRating] = useState(rating);
  const [editedText, setEditedText] = useState(text);
  if (isLoading) {
    return "loading ";
  }
  if (isError) {
    return "error";
  }

  const increase = () => {
    let newVal;
    if (editedRating + 1 > 5) {
      newVal = 5;
    } else {
      newVal = editedRating + 1;
    }
    setEditedRating(newVal);
  };

  const decrease = () => {
    let newVal;
    if (editedRating - 1 < 0) {
      newVal = 0;
    } else {
      newVal = editedRating - 1;
    }
    setEditedRating(newVal);
  };
  return (
    <div key={id}>
      <div>
        <span>
          <b>
            {userFromServer
              ? userFromServer.name
              : Object.values(user).length === 0
              ? "unknown user"
              : user.name}{" "}
          </b>
        </span>{" "}
        {editState ? (
          <span>
            {" "}
            <Counter
              value={editedRating}
              increase={increase}
              decrease={decrease}
            />
          </span>
        ) : (
          Array.from(Array(rating), (_, i) => <span key={i}>⭐</span>)
        )}
        {userFromServer || Object.values(user).length === 0 ? null : ( //кнопка редактирования отображается, только если пользователь авторизован
          <>
            <span>
              {" "}
              <button
                onClick={() => setEditState((prev) => !prev)}
                className={classNames(styles.clearbutton, {
                  [styles.light]: theme === "light",
                  [styles.dark]: theme === "dark",
                })}
              >
                {editState ? "Cancel" : "Edit"}
              </button>{" "}
            </span>
            <span>
              {editState ? (
                <button
                  onClick={() => {
                    editReview({
                      id,
                      review: {
                        userId: user.id,
                        text: editedText,
                        rating: editedRating,
                      },
                    });
                    setEditState(false);
                  }}
                  className={classNames(styles.clearbutton, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                  })}
                >
                  Save
                </button>
              ) : null}
            </span>
          </>
        )}
      </div>
      <p>
        {editState ? (
          <textarea
            defaultValue={editedText}
            onChange={(event) => setEditedText(event.target.value)}
          />
        ) : (
          text
        )}
      </p>{" "}
    </div>
  );
};
