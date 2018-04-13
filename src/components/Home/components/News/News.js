import React, { PureComponent } from 'react';
import styled from 'styled-components';
import momentPropTypes from 'react-moment-proptypes';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Link from 'components/Link';
import Blog from 'components/Blog';

import { COLOR, BOX_SHADOWS, BORDER_RADIUS, FONT_SIZES } from 'config';

import placeholder from './images/placeholder.svg';

const DEFAULT_LOCALE = 'en';

const Wrapper = styled(Box)`
  background: ${COLOR.white};
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 65%;
  border-radius: ${BORDER_RADIUS.base} ${BORDER_RADIUS.base} 0 0;
  overflow: hidden;
  
`;

const Image = styled.img`
  position: absolute;
  width: auto;
  min-width: 50%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const NewsContainer = styled.div`
  width: 100%;
  box-shadow: ${BOX_SHADOWS.box};
  border-radius: ${BORDER_RADIUS.base};
`;

const DateText = styled(Text)`
  margin: 0;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: #000;
`;

const StyledHeading = styled(Heading)`
  line-height: 1.5;
  height: ${props => FONT_SIZES[props.fontSize] * 1.5 * 2}px;
  overflow: hidden;
`;

const NewsItem = ({ title, date, href, image }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[3]} pb={4} mb={[6, 8]} align="flex-start">
    <StyledLink href={href} target="_blank">
      <NewsContainer>
        <ImageContainer>
          {image ? <Image src={image} /> : <Image src={placeholder} />}
        </ImageContainer>
        <Box px={7} pb={10} pt={6}>
          <DateText color={COLOR.textLight} fontSize={2}>{date.format('MMMM DD, YYYY')}</DateText>
          <StyledHeading as="h4" mb={1} fontSize={4}>
            {title}
          </StyledHeading>
        </Box>
      </NewsContainer>
    </StyledLink>
  </Flex>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: momentPropTypes.momentObj.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function getRssPath(locale) {
  return locale === DEFAULT_LOCALE
    ? 'https://www.skycoin.net/blog/index.xml'
    : `https://www.skycoin.net/blog/${locale}/index.xml`;
}

class News extends PureComponent {
  constructor(props) {
    super(props);
    const rss = getRssPath(this.props.locale);

    this.state = {
      rss,
    };
  }

  componentWillReceiveProps({ locale }) {
    if (locale !== this.props.locale) {
      const rss = getRssPath(locale);

      this.setState({ rss });
    }
  }

  render() {
    return (
      <Wrapper pt={[10, 13]} pb={[7, 8]}>
        <Container>
          <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} width={[1, 2 / 3]}>
            <FormattedMessage id="home.news.heading" />
          </Heading>
          <Blog rss={this.state.rss} />
        </Container>
      </Wrapper>
    );
  }
}

News.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default News;
