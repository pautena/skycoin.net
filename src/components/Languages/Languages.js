import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flag } from 'flag';

const Languages = styled.div`
  list-style: none;
  margin: 0;
`;

const Language = styled.span`
  &:not(:first-of-type):before {
    content: ' · '
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Languages>
    <Language><StyledLink to="/">English</StyledLink></Language>
    <Flag
      name="chinese"
      render={() => (
        <Language><StyledLink to="/zh/">中文</StyledLink></Language>
      )}
    />
    <Flag
      name="japanese"
      render={() => (
        <Language><StyledLink to="/ja/">日本語</StyledLink></Language>
      )}
    />
    <Flag
      name="korean"
      render={() => (
        <Language><StyledLink to="/ko/">한국어</StyledLink></Language>
      )}
    />
  </Languages>
);
