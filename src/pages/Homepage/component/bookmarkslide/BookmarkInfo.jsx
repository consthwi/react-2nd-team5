import React from "react";
import { useSelector } from "react-redux";
import BookmarkSliderH from "./component/BookmarkSliderH";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSpoon } from "@fortawesome/free-solid-svg-icons";
import "./BookmarkInfo.style.css";
import NoFindPage from "../../../../common/nofindpage/NoFindPage";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";

const BookmarkInfo = () => {
  const { data: fornothing } = useRecipeDataQuery();
  const user = useSelector((state) => state.auth.user);
  const guestBookmarks = useSelector((state) => state.bookmark.items);
  if (!fornothing) {
    return null;
  }

  return (
    <div>
      <h3 className="bookmarkinfo">
        <FontAwesomeIcon icon={faSpoon} />{" "}
        {user ? `${user.userId}님의 찜목록` : "내가 찜한 요리"}
      </h3>
      <div>
        {user ? (
          <BookmarkSliderH guestBookmarks={guestBookmarks} />
        ) : (
          <NoFindPage user={user} />
        )}
      </div>
    </div>
  );
};

export default BookmarkInfo;
