import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import Header from 'components/Header';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';

import { COLOR, COLORS } from 'config';

const Info = ({ heading, body }) => (
  <Box px={[0, 4, 8]}>
    <SubHeading heavy as="h3" fontSize={2} color="black">
      <FormattedMessage id={heading} />
    </SubHeading>
    <Text fontSize={2} color={COLOR.textDark}>
      <FormattedMessage id={body} />
    </Text>
  </Box>
);

export default Info;
