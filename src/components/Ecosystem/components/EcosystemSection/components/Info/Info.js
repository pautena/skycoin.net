import React from 'react';
import { FormattedMessage } from 'react-intl';
import {  Box } from 'grid-styled';

import SubHeading from 'components/SubHeading';
import Text from 'components/Text';

import { COLOR } from 'config';

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
