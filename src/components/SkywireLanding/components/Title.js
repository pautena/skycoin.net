import React from 'react';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import { FONT_SIZES } from '../../../config';

import Text from 'components/Text';

const Title = ({id})=>{
    return (
        <Text heavy fontSize={rem(FONT_SIZES[7])}><FormattedMessage id={id}/></Text>
    );
}

export default Title;