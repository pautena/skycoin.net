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

import { COLOR } from 'config';

const Image = styled.img`
  
`;

const StyledBox = styled(Box)`
  color: ${COLOR.textGrey};
  text-align: center;
`;

const ImageItem = ({ icon, label }) => (
  <StyledBox width={[1 / 3, 1 / 2, 1 / 3]}>
    <Image src={icon} />
    <Text fontSize={[1, 1, 2]} caps>
      <FormattedMessage id={label} />
    </Text>
  </StyledBox>
);

const Illustrations = ({ items }) => (
  <Flex align="flex-start" wrap>
    {items.map((item, i) => <ImageItem icon={item.icon} label={item.label} key={i} />)}
  </Flex>
);

export default Illustrations;
