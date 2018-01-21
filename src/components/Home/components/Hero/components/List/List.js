import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';
import { FormattedMessage } from 'react-intl';

import { SPACE } from 'config';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(SPACE[4])};

  ${media.sm.css`
    margin-bottom: 0;
  `}
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #ffffff;
  font-family: "Montreal",sans-serif;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5em;
  text-transform: none;
`;

const List = ({ content }) => (
  <Wrapper>
    <ul>
      {content.map(item => (
        <ListItem>
          <FormattedMessage id={item} />
        </ListItem>
      ))}
    </ul>
  </Wrapper>
);

List.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
