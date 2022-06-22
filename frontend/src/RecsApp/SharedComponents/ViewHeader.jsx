import PropTypes from "prop-types";
import styled from "styled-components";
import {FontSizes, FontStyles} from "../../../Typography";


const StyledHeader = styled.div`
  ${FontSizes.LARGE};
  ${FontStyles.OVERLINE};
  margin-bottom: 16px;
`;
/**
 * Simple header for the various pages of the site navigated to by Naviation.
 */
const ViewHeader = ({ title }) => <StyledHeader>{title}</StyledHeader>;

ViewHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ViewHeader;