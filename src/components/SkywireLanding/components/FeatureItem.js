import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ImageCard from 'components/ImageCard';
import { ImageContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';

const FeatureItem = ({ title, description, image }) => {
  const icon = <ImageContainer image={image} height="320px" width={[1, 1, 1 / 2]} />;
  return (
    <ImageCard image={icon} width={['320px', '320px', 'auto']}>
      <Title id={title} />
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
