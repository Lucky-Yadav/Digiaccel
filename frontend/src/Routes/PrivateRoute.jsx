
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const  PrivateRoute = (exact, children, push) => {
  const isAuth = useSelector((state) => state.login.isAuth);
  return isAuth ? (
    <div>
      <Routes>
        <Route path="/path"element={children} />
      </Routes>
    </div>
  ) : (
    <Navigate to={"/login"} push={push} />
  );
}

export { PrivateRoute };
