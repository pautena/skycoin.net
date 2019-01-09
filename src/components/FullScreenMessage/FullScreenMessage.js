
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import Text from 'components/Text';

const Content = styled(Flex)`
    justify-content:center;
    align-items:center;
    height:50vh;
    padding: 0 1rem;
`;

const FullScreenMessage = ({ children }) => (
  <Content>
    <Text fontSize={[6, 6, 7]} color="black" heavy textAlign="center">
      {children}
    </Text>
  </Content>
);

FullScreenMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullScreenMessage;

