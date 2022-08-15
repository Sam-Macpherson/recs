import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes } from "../../../Typography";
import { Avatar, Button, Input } from "../BaseComponents";
import { Navigate, useMatch } from "react-router-dom";
import {useEffect, useState} from "react";
import {getUser, login, register} from "../../api/authenticate";

const StyledHeader = styled.div`
  ${FontSizes.HUGE}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StyledActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

/**
 * Simple header for the various pages of the site navigated to by Naviation.
 */
const ViewHeader = ({ title }) => {
  const matchesLogin = useMatch('/login/');
  const matchesRegister = useMatch('/register/');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(user => setUser(user));
  }, []);

  const submitLogin = async (e) => {
     e.preventDefault();
     await login({ email, password });
     setRedirect("/browse/");
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    await register({ email, password, confirmPassword });
    setRedirect("/login/");
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <StyledHeader>
      {title}
      <StyledActionButtons>
        {matchesLogin !== null &&
          <form onSubmit={submitLogin}>
            <Input placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" required onChange={e => setPassword(e.target.value)} />
            <Button primary>Login</Button>
          </form>}
        {matchesRegister !== null &&
          <form onSubmit={submitRegister}>
            <Input placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" required onChange={e => setPassword(e.target.value)}/>
            <Input placeholder="Password Again" type="password" required onChange={e => setConfirmPassword(e.target.value)}  />
            <Button primary>Register</Button>
          </form>
        }
        {!matchesRegister && !matchesLogin &&
          <>
            <Button primary>Give</Button>
            <Button>Request</Button>
            <Avatar onClick={() => setRedirect('/logout/')}image={user?.profile_picture}/>
          </>
        }
      </StyledActionButtons>
    </StyledHeader>
  );
}

ViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ViewHeader;