import { useMatch, useLinkClickHandler } from "react-router-dom";

import styled from "styled-components";
import { ColorPalette, FontColors } from "../../../StylingConstants";
import {FontSizes, FontStyles} from "../../../Typography";
import {Avatar} from "../BaseComponents";

const StyledNav = styled.nav`
  flex-shrink: 0;
  padding: 16px;
  width: 232px;
  height: 100%;
  box-sizing: border-box;
  background: ${ColorPalette.BLACK}
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0 32px;
  ${FontSizes.LARGE}
`;

const StyledNavItemList = styled.div`
  padding: 16px 0;
  height: fit-content;
  & + & {
    border-top: 1px solid ${ColorPalette.LIGHT_ORANGE};
  }
  > :not(:first-child) {
    margin-top: 4px;
  }
`;

const StyledNavItem = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  ${FontColors.LIGHT_WHITE}
  ${FontSizes.MEDIUM}
  ${FontStyles.OVERLINE}

  ${props => 
  props.selected 
    ? `
    background: ${ColorPalette.LIGHT_ORANGE};
    ` : `
    background: transparent;
    `}

  &:hover {
    cursor: pointer;
    background: ${ColorPalette.GRAY};
  }
`;


const NavigationLink = ({ to, label }) => {
  const onClick = useLinkClickHandler(to);
  const match = useMatch(to);

  return <StyledNavItem onClick={onClick} selected={match !== null}>{label}</StyledNavItem>;
};

const Navigation = () => (
  <StyledNav>
    <StyledHeader>
      Get Rec'd
      <Avatar />
    </StyledHeader>
    <StyledNavItemList>
      <NavigationLink to="/browse/" label="Browse" />
      <NavigationLink to="/rate/" label="Rate" />
    </StyledNavItemList>
    <StyledNavItemList>
      <NavigationLink to="/friends/" label="Friends" />
      <NavigationLink to="/groups/" label="Groups" />
    </StyledNavItemList>
  </StyledNav>
);

export default Navigation;
