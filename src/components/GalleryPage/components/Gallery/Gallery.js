import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { Box } from 'grid-styled';
import Lightbox from 'react-images';
import media from 'utils/media';
import { rem } from 'polished';
import { FONT_FAMILIES, COLOR, FONT_SIZES, SPACE } from 'config';
import Container from 'components/Container';

/* eslint-disable no-unused-expressions */
injectGlobal`
  #lightboxBackdrop {
    > div {
      position: relative;
    }
  }
`;
/* eslint-disable no-unused-expressions */

const lightboxTheme = {
  container: {
    background: 'rgba(255, 255, 255, 0.5)',
    padding: rem(SPACE[7]),
  },
  close: {
    fill: '#494949',
    padding: rem(SPACE[2]),
    margin: rem(SPACE[3]),
  },
  arrow: {
    fill: '#494949',
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


const Wrapper = styled(Box)`
  column-count: 1;
  column-gap: ${props => props.theme.space[7]}px;
  
  ${media.sm.css`
    column-count: 2;
  `}
  
  ${media.md.css`
    column-count: 4;
  `}
`;

const Figure = styled.figure`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: ${props => props.theme.space[7]}px;
`;

const Img = styled.img.attrs({
  alt: '',
})`
  width: 100%;
  height: auto;
`;

const ImgWrapper = styled.div`
  position: relative;
  font-size: 0;
  margin-bottom: ${props => props.theme.space[5]}px;
  
  &:before {
    content: '+';
    display: block;
    position: absolute;
    bottom: ${props => props.theme.space[3]}px;;
    right: ${props => props.theme.space[3]}px;;
    width: ${props => props.theme.space[5]}px;;
    height: ${props => props.theme.space[5]}px;;
    background: ${COLOR.base};
    border-radius: 100%;
    color: ${COLOR.white};
    font-size: ${props => rem(props.theme.fontSizes[5])};
    line-height: ${props => props.theme.space[5]}px;;
    text-align: center;
    visibility: hidden;
  }
  
  &:hover {
    cursor: pointer;
    
    ${Img} {
      box-shadow: 0 3px 10px rgba(77, 97, 117, 0.2);
    }
  
    &:before {
      visibility: visible;
    }
  }
`;

const Figcaption = styled.figcaption`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${props => rem(props.theme.fontSizes[2])};
  color: ${COLOR.textGrey};
`;

const Item = ({ item, onClick }) => (
  <Figure>
    <ImgWrapper>
      <Img src={item.src} onClick={onClick} />
    </ImgWrapper>
    <Figcaption>{item.caption}</Figcaption>
  </Figure>
);

Item.propTypes = {
  item: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

class Gallery extends React.PureComponent {
  state = {
    lightboxIsOpen: false,
    activeIndex: 0,
  };

  gotoPrev = () => {
    this.setState(state => ({
      activeIndex: state.activeIndex - 1,
    }));
  };

  gotoNext = () => {
    this.setState(state => ({
      activeIndex: state.activeIndex + 1,
    }));
  };

  gotoImage = (index) => {
    this.setState({ activeIndex: index, lightboxIsOpen: true });
  };

  close = () => {
    this.setState({ lightboxIsOpen: false });
  };

  open = () => {
    this.setState({ lightboxIsOpen: true });
  };

  render() {
    const { items } = this.props;
    const { lightboxIsOpen, activeIndex } = this.state;

    return (
      <Container>
        <Wrapper my={[8, 10, 12]}>
          {items.map((item, i) => <Item key={i} item={item} onClick={() => this.gotoImage(i)} />)}
        </Wrapper>
        <Lightbox
          images={items}
          isOpen={lightboxIsOpen}
          currentImage={activeIndex}
          backdropClosesModal
          showImageCount={false}
          onClickPrev={this.gotoPrev}
          onClickNext={this.gotoNext}
          onClose={this.close}
          theme={lightboxTheme}
        />
      </Container>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
