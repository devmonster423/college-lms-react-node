import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from 'theme/Components';
import { red } from 'theme/variable';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

import CalendarIcon from './Icons/Calendar';

const HoverDiv = styled.div`
  &:hover {
    color: ${red};
    > div {
      > svg {
        transform: scale(1.1);
        transform: translateY(-3px);
      }
    }
  }
`;

const StyledLink2 = StyledLink.extend`
  flex: 3;
`;

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Academic Calendar</NavItemFlexHeading>
    <StyledLink2 to="/somestaticthing" onClick={click}>
      <HoverDiv>
        <FlexCenter>
          <CalendarIcon />
        </FlexCenter>
        <NavItemFlex center>Download</NavItemFlex>
      </HoverDiv>
    </StyledLink2>
  </NavCardFlex>
);
