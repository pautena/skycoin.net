import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { isMobile } from 'react-device-detect';
import media from 'utils/media';
import { rem } from 'polished';
import { FONT_FAMILIES, COLOR } from 'config';
import Heading from 'components/Heading';
import Lightbox from 'components/Lightbox';

const Wrapper = styled(Box)`
  column-count: 1;
  column-gap: ${props => props.theme.space[7]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  border-bottom: 1px solid ${COLOR.borderGrey};
  
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
  padding-bottom: ${props => props.theme.space[7]}px;
  margin: 0;
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
  
  &:before {
    content: '+';
    display: block;
    position: absolute;
    bottom: ${props => props.theme.space[3]}px;
    right: ${props => props.theme.space[3]}px;
    width: 24px;
    height: 24px;
    background: ${COLOR.base};
    border-radius: 100%;
    color: ${COLOR.white};
    font-size: ${props => rem(props.theme.fontSizes[6])};
    line-height: 21px;
    text-align: center;
    visibility: hidden;
  }
  
  &:hover {
    cursor: pointer;
    
    ${Img} {
      box-shadow: 0 3px 10px rgba(77, 97, 117, 0.2);
    }
  
    &:before {
      visibility: ${isMobile ? 'hidden' : 'visible'};
    }
  }
`;

const Figcaption = styled.figcaption`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${props => rem(props.theme.fontSizes[2])};
  color: ${COLOR.textGrey};
  margin-top: ${props => props.theme.space[5]}px;
`;

const Item = ({ item, onClick }) => (
  <Figure onClick={onClick}>
    <ImgWrapper>
      <Img src={item.src} />
    </ImgWrapper>
    {item.caption && <Figcaption>{item.caption}</Figcaption>}
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
    if (isMobile) {
      return;
    }

    this.setState({ activeIndex: index, lightboxIsOpen: true });
  };

  close = () => {
    this.setState({ lightboxIsOpen: false });
  };

  open = () => {
    this.setState({ lightboxIsOpen: true });
  };

  render() {
    const { items, heading } = this.props;
    const { lightboxIsOpen, activeIndex } = this.state;

    return (
      <div>
        {heading && <Heading as="h3" fontSize={5} mt={9} mb={7}>
          <FormattedMessage id={heading} />
        </Heading>}
        <Wrapper>
          {items.map((item, i) => <Item key={i} item={item} onClick={() => this.gotoImage(i)} />)}
        </Wrapper>
        {!isMobile && <Lightbox
          images={items}
          isOpen={lightboxIsOpen}
          currentImage={activeIndex}
          onClickPrev={this.gotoPrev}
          onClickNext={this.gotoNext}
          onClose={this.close}
        />
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string,
};

Gallery.defaultProps = {
  heading: '',
};

export default Gallery;
