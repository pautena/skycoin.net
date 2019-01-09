import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ImageCard from 'components/ImageCard';
import {ImageFullContainer} from 'components/ImageCard/ImageCard';

import Text from 'components/Text';

import afee from '../images/afee.png';


const SpanLight = styled.span`
  font-weight:200;
`;

const Afee = () => {
    return (
      <ImageCard flexDirection="row-reverse" image={<ImageFullContainer image={afee} height="300px"/>}>
        <Text><FormattedMessage id='landing.skyware.afee.text'/><SpanLight> - <FormattedMessage id='landing.skyware.afee.name'/></SpanLight></Text>
      </ImageCard>
    );
  }

export default Afee;