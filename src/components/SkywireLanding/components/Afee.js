import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ImageCard from 'components/ImageCard';
import { ImageFullContainer } from 'components/ImageCard/ImageCard';
import Text from 'components/Text';

import afee from '../images/afee.png';
import { COLOR } from '../../../config';


const SpanLight = styled.span`
  font-weight:100;
  color:${COLOR.textGrey};
  font-style:italic;
`;

const Afee = () => {
  const image = <ImageFullContainer image={afee} width={['320px', 'auto', 'auto']} height="320px" />;
  return (
    <ImageCard flexDirection="row-reverse" width={['320px', '320px', 'auto']} align="center" image={image}>
      <Text>
        <FormattedMessage id="landing.skyware.afee.text" />
        <SpanLight> - <FormattedMessage id="landing.skyware.afee.name" /></SpanLight>
      </Text>
    </ImageCard>
  );
};

export default Afee;
