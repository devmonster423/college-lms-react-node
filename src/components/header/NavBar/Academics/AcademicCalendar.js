import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import calendarImage from 'images/calendar.jpg';
import { FlexCenter } from 'theme/Components';
import { red } from 'theme/variable';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

const CalendarImage = styled.img`
  transition: all 0.1s ease;
  width: 100px;
`;

const HoverDiv = styled.div`
  & :hover {
    color: ${red};
    > img {
      transform: scale(1.1);
    }
  }
`;

const StyledLink2 = StyledLink.extend`
  flex: 3;
`;

export default () => (
  <NavCardFlex>
    <NavItemFlexHeading>Academic Calendar</NavItemFlexHeading>
    <StyledLink2 to="/somestaticthing">
      <HoverDiv>
        <FlexCenter>
          <CalendarImage src={calendarImage} />
        </FlexCenter>
        <NavItemFlex center>Download</NavItemFlex>
      </HoverDiv>
    </StyledLink2>
  </NavCardFlex>
);
