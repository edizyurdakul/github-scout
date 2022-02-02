import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import User from "../components/User";
import SpinnerComponent from "../components/shared/Spinner";
import { getUser, getUserRepos } from "../context/github/GithubActions";

function UserPage() {
  const { dispatch, user, userRepos, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({ type: "GET_USER", payload: userData });
    };
    const getUserRepoData = async () => {
      const userRepoData = await getUserRepos(params.login);
      dispatch({ type: "GET_REPOS", payload: userRepoData });
    };
    getUserData();
    getUserRepoData();
  }, [dispatch, params.login]);

  if (!loading) {
    return (
      <>
        <User user={user} repos={userRepos} />
      </>
    );
  } else {
    return <SpinnerComponent />;
  }
}

export default UserPage;
