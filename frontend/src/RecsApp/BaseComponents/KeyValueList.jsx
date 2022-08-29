import styled from "styled-components";
import {ColorPalette} from "../../../StylingConstants";
import {M_DASH} from "../../../Typography";


const ListItem = styled.div`
  border-radius: 36px;
  background-color: ${props => props.$even ? ColorPalette.DARK_GRAY : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  min-height: 32px;
`;

const StyledListContainer = styled.div`
  width: 100%;
`;

/**
 * Renders a list of key, value pairs. Does not have a header.
 * @param items - array of objects of the form { key: ... , value: ..., valueFormatter: () => JSX }
 *  valueFormatter is optional.
 */
const KeyValueList = ({ items }) => {

  return (
    <StyledListContainer>
      {items.map((item, i) => <ListItem $even={i % 2 === 0}>
        <span>{item.key}</span>
        { !item.value && <span>{M_DASH}</span>}
        { item.value && item.valueFormatter && item.valueFormatter(item.value) }
        { item.value && !item.valueFormatter && <span>{item.value}</span> }
      </ListItem>)}
    </StyledListContainer>
  );
};

export default KeyValueList;
