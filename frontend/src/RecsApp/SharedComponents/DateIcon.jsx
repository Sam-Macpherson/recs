import styled from "styled-components";
import {ColorPalette} from "../../../StylingConstants";
import {FontSizes, FontStyles} from "../../../Typography";
import { DateTime } from "luxon";


const StyledMonth = styled.span`
  ${FontStyles.OVERLINE}
  ${FontSizes.SMALL}
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${ColorPalette.BLACK};
  width: 100%;
`;

const StyledDay = styled.span`
  ${FontSizes.HUGE}
  width: 100%;
`;

const StyledYear = styled.span`
  ${FontStyles.OVERLINE}
  ${FontStyles.ITALICS}
  ${FontSizes.TINY}
  width: 100%;
`;

const StyledContainer = styled.div`
  border: 1px solid ${ColorPalette.BLACK};
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: ${ColorPalette.GRAY};
  width: 80px;
  height: 64px;
  padding-bottom: 2px;
  border-radius: 36px;
  overflow: hidden;
`;


const DateIcon = ({ date }) => {
  // Assumes date is in string format.
  const datetime = DateTime.fromISO(date);
  return (
    <StyledContainer>
      <StyledMonth>
        {datetime.monthShort}
      </StyledMonth>
      <StyledDay>
        {datetime.day}
      </StyledDay>
      <StyledYear>
        {datetime.year}
      </StyledYear>
    </StyledContainer>
  );
};

export default DateIcon;
