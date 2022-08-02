import { ViewHeader } from "../SharedComponents";
import { useMatch } from "react-router-dom";


const LoginView = () => {
  const matchesLogin = useMatch('/login/');

  return (
    <>
      <ViewHeader title={matchesLogin ? "Login" : "Register"} />
      <div>
        Here's some random content that users can look at while they decide if they
        want to log in or not.
      </div>
    </>
  );
};

export default LoginView;
