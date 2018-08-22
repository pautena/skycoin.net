import React from 'react';
import { injectGlobal } from 'styled-components';
import Lightbox from 'react-images';
import { rem } from 'polished';
import { FONT_FAMILIES, COLOR, FONT_SIZES, SPACE } from 'config';

import closeIc from './close.svg';
import nextIc from './next.svg';
import prevIc from './prev.svg';

const arrowIconWidth = 42;

/* eslint-disable no-unused-expressions */
injectGlobal`
  #lightboxBackdrop {
    > div {
      position: relative;
    }
    
    // figure img {
    //   max-height: calc(100vh - 200px);
    // }
    
    // svg {
    //   display: none;
    // }
    
    class[~="close"]:before {
      content: '1';
      
    }
  }
`;
/* eslint-disable no-unused-expressions */

const lightboxTheme = {
  container: {
    background: 'rgba(255, 255, 255, 0.5)',
    padding: rem(SPACE[7]),
    gutter: {
      vertical: 100,
    },
  },
  close: {
    padding: rem(SPACE[2]),
    margin: rem(SPACE[3]),
  },
  arrow: {
    padding: 0,
  },
  arrow__size__medium: {
    width: arrowIconWidth,

    '@media (min-width: 768px)': {
      width: arrowIconWidth,
    },
  },
  arrow__size__small: {
    width: arrowIconWidth,

    '@media (min-width: 500px)': {
      width: arrowIconWidth,
    },
  },
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 'auto',
  },
  content: {
    background: '#fff',
    boxShadow: '0 3px 10px rgba(91, 97, 105, 0.15);',
  },
  footer: {
    color: COLOR.textGrey,
    fontFamily: FONT_FAMILIES.sans,
    fontSize: rem(FONT_SIZES[2]),
    paddingLeft: rem(SPACE[5]),
    paddingRight: rem(SPACE[5]),
    paddingTop: rem(SPACE[4]),
    paddingBottom: rem(SPACE[4]),
    height: 'auto',
  },
};

const Close = () => (
  <img src={closeIc} alt="" />
);

const Prev = () => (
  <img src={prevIc} alt="" />
);

const Next = () => (
  <img src={nextIc} alt="" />
);

const CustomLightbox = props => (
  <Lightbox
    {...props}
    backdropClosesModal
    showImageCount={false}
    theme={lightboxTheme}
    preventScroll={false}
    closeButton={Close}
    prevButton={Prev}
    nextButton={Next}
  />
);

export default CustomLightbox;
