import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes } from "../../../Typography";
import { Avatar, Button, Input } from "../BaseComponents";

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
const ViewHeader = ({ title }) => (
  <StyledHeader>
    {title}
    <StyledActionButtons>
      {title === "Login" ? // Temporary while I figure out authentication.
        <>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button primary>Login</Button>
        </> :
        <>
          <Button primary>Give</Button>
          <Button>Request</Button>
          <Avatar />
        </>
      }
    </StyledActionButtons>
  </StyledHeader>
);

ViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ViewHeader;