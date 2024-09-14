import { useSelector } from "react-redux";

import PrivateRoute from "../components/PrivateRoute";
import { Navigate, useParams } from "react-router-dom";
import Wishlist from "./components/WishList";

const WishPage = () => {
  const { type } = useParams();  // URL의 type 파라미터를 가져옴
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (type === "user" && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {type === "user" ? (
        <PrivateRoute>
          <Wishlist isGuest={false} />
        </PrivateRoute>
      ) : (
        <Wishlist isGuest={true} />
      )}
    </div>
  );
};

export default WishPage;
