import React from 'react';
import styled from 'styled-components';

import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Blog from 'components/Blog';

import { COLOR } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.white};
  overflow: hidden;
`;

const SkyminerNews = () => (
  <Wrapper pt={[10, 13]} pb={[7, 8]}>
    <Container>
      <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} width={[1, 2 / 3]}>
        <FormattedMessage id="home.news.heading" />
      </Heading>
      <Blog rss="https://www.skycoin.net/blog/categories/skyminer/index.xml" />
    </Container>
  </Wrapper>
);

export default SkyminerNews;
