import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ImageCard from 'components/ImageCard';
import { ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';

const StyledTitle = styled(Title)`
  h3 {
    margin-bottom:0;
  }
`;

const FeatureItem = ({ title, description, image }) => {
  const icon = <ImageContainer image={image} height="320px" width={[1, 1, 1 / 2]} />;
  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']}>
      <Text>
        <StyledTitle id={title} />
      </Text>
      <Text>
        <FormattedMessage id={description} />
      </Text>
    </ImageCard>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FeatureItem;
