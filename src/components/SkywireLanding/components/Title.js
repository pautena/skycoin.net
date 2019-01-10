import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import Heading from 'components/Heading';

import { FONT_SIZES } from '../../../config';


const Title = ({ id }) =>
  (<Heading heavy fontSize={rem(FONT_SIZES[7])} as="h3"><FormattedMessage id={id} /></Heading>);


Title.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Title;
