import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import User from "../components/User";
import SpinnerComponent from "../components/shared/Spinner";
import { getUserAndRepos } from "../context/github/GithubActions";

function UserPage() {
  const { dispatch, user, repos, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      console.log(userData);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  if (!loading) {
    return (
      <>
        <User user={user} repos={repos} />
      </>
    );
  } else {
    return <SpinnerComponent />;
  }
}

export default UserPage;
