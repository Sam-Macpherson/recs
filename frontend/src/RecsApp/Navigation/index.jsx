import { useMatch, useLinkClickHandler } from "react-router-dom";

import styled from "styled-components";
import { ColorPalette, FontColors } from "../../../StylingConstants";
import {FontSizes, FontStyles} from "../../../Typography";

import { Grid } from "@styled-icons/bootstrap/Grid";
import { Star } from "@styled-icons/boxicons-regular/Star";
import { Group } from "@styled-icons/material-outlined/Group";
import { EmojiLaugh } from "@styled-icons/fluentui-system-regular/EmojiLaugh";
import { ChevronLeft } from "@styled-icons/entypo/ChevronLeft";
import { ChevronRight } from "@styled-icons/entypo/ChevronRight";
import { useState } from "react";

const StyledNav = styled.nav`
  position: relative;
  flex-shrink: 0;
  padding: 16px;
  transition: 0.5s;
  width: ${props => props.collapsed ? "80px" : "256px"};
  height: 100%;
  box-sizing: border-box;
  border-radius: 0 16px 16px 0;
  background: ${ColorPalette.BLACK}
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const StyledLogo = styled.div`
  width: 36px;
  height: 36px;
  border: 2px solid ${ColorPalette.BLACK};
  ${FontSizes.HUGE}
`;

const StyledNavListIcon = styled.div`
  display: inline-block;
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
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 36px;
  ${FontColors.LIGHT_WHITE}
  ${FontSizes.MEDIUM}

  ${props => 
  props.selected 
    ? `
    background: ${ColorPalette.LIGHT_ORANGE};
    ` : `
    background: transparent;
    `}

  &:hover {
    transition: 0.2s;
    cursor: pointer;
    background: ${props => props.selected ? ColorPalette.LIGHTEST_ORANGE : ColorPalette.GRAY };
  }
  
  &:active {
    transition: 0.2s;
    cursor: pointer;
    background: ${ColorPalette.LIGHTEST_ORANGE};
  }
  > :nth-child(2) {
    margin-left: 8px;
  }
`;

const StyledToggleContainer = styled.div`
  position: absolute;
  top: 16px;
  right: -18px;
  width: 32px;
  height: 32px;
  border-radius: 40px;
  border: 4px solid ${ColorPalette.BLACK};
  background: ${ColorPalette.BLACK};
`;

const StyledToggle = styled.div`
  z-index: 1;
  width: 32px;
  height: 32px;
  background: ${ColorPalette.LIGHT_ORANGE};

  &:hover {
    transition: 0.2s;
    background: ${ColorPalette.LIGHTEST_ORANGE};
  }
  
  &:active {
    transition: 0.2s;
    background: ${ColorPalette.LIGHT_ORANGE};
  }
  
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


const NavigationLink = ({ to, label, icon, collapsed }) => {
  const onClick = useLinkClickHandler(to);
  const match = useMatch(to);

  return (
    <StyledNavItem onClick={onClick} selected={match !== null}>
      <StyledNavListIcon>{icon ? icon : null}</StyledNavListIcon>
      {!collapsed && <span>{label}</span>}
    </StyledNavItem>
  );
};

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledNav collapsed={collapsed}>
      <StyledToggleContainer>
        <StyledToggle onClick={() => setCollapsed(!collapsed)}>
          {
            collapsed ?
              <ChevronRight size={36} color={ColorPalette.WHITE}/> :
              <ChevronLeft size={36} color={ColorPalette.WHITE}/>
          }
        </StyledToggle>
      </StyledToggleContainer>
      <StyledLogoContainer>
        <StyledLogo>
          {/* Will fill in a logo at some point. */}
          <EmojiLaugh size={36}/>
        </StyledLogo>
      </StyledLogoContainer>
      <StyledNavItemList>
        <NavigationLink to="/browse/" collapsed={collapsed} label="Browse" icon={<Grid size={24} />} />
        <NavigationLink to="/rate/" collapsed={collapsed} label="Rate" icon={<Star size={24} />} />
      </StyledNavItemList>
      <StyledNavItemList>
        <NavigationLink to="/groups/" collapsed={collapsed} label="Groups" icon={<Group size={24} />} />
      </StyledNavItemList>
    </StyledNav>
  );
};

export default Navigation;
