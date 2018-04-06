import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Text from 'components/Text';

import { COLOR } from 'config';

const StyledBox = styled(Box)`
  color: ${COLOR.textGrey};
  text-align: center;
`;

const Graphic = styled.img`
  max-width: 100%;
`;

const ImageItem = ({ icon, label }) => (
  <StyledBox width={[1 / 2, 1 / 2]}>
    <Graphic src={icon} alt="" />
    <Text fontSize={[1, 1, 2]} caps>
      <FormattedMessage id={label} />
    </Text>
  </StyledBox>
);

ImageItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

ImageItem.defaultProps = {
  icon: '',
  label: '',
};

const Illustrations = ({ items }) => (
  <Flex align="flex-start" wrap>
    {items.map((item, i) => <ImageItem icon={item.icon} label={item.label} key={i} />)}
  </Flex>
);

Illustrations.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Illustrations.defaultProps = {
  items: [],
};

export default Illustrations;
