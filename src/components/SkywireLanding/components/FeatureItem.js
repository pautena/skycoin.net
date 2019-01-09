import React from 'react';
import { FormattedMessage } from 'react-intl';

import ImageCard from 'components/ImageCard';
import {ImageContainer} from 'components/ImageCard/ImageCard';
import Text from 'components/Text';
import Title from './Title';

const FeatureItem = ({title,description,image}) => {
    return (
      <ImageCard image={<ImageContainer image={image}  height="408px"/>}>
      <Text>
      <Title id={title}/>    
      </Text>
        <Text>
        <FormattedMessage id={description}/>
        </Text>
      </ImageCard>
    );
  }

FeatureItem.propTypes = {

};

export default FeatureItem;