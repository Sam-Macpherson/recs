import styled from "styled-components";
import { ColorPalette } from "../../../StylingConstants";
import PropTypes from "prop-types";

const StyledContainer = styled.div` // WIP, will be used for profile icons.
  width: ${props => props.size ? props.size : 36}px;
  height: ${props => props.size ? props.size : 36}px;
  background: ${ColorPalette.ORANGE};
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
`;

/**
 * An avatar component used to display profile icons.
 * @returns {JSX.Element}
 */
const Avatar = ({ image, size, ...props }) => {
  return (
    <StyledContainer size={size} {...props}>
      <img src={image} alt="🦖" width={size} height={size} />
    </StyledContainer>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
}

Avatar.defaultProps = {
  size: 36,
  image: "https://cdn-icons-png.flaticon.com/512/1939/1939463.png",
}

export default Avatar;
