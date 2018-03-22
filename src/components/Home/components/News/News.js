import React, { PureComponent } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Link from 'components/Link';

import { COLOR, BOX_SHADOWS, BORDER_RADIUS, FONT_SIZES } from 'config';

import placeholder from './images/placeholder.svg';

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

const Date = styled(Text)`
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
  <Flex width={[1, 1 / 2, 1 / 3]} px={[6, 6, 8]} mb={[6, 8]} align="flex-start">
    <StyledLink href={href} target="_blank">
      <NewsContainer>
        <ImageContainer>
          {image ? <Image src={image} /> : <Image src={placeholder} />}
        </ImageContainer>
        <Box px={7} pb={10} pt={6}>
          <Date color={COLOR.textLight} fontSize={2}>{date.format('MMMM DD, YYYY')}</Date>
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

class News extends PureComponent {
  constructor() {
    super();

    this.state = {
      posts: [],
      loaded: false,
    };
    // this.rss = 'https://www.skycoin.net/blog/index.xml';
    // TODO: remove blog.xml from /public when finished testing
    this.rss = 'blog.xml';
  }

  componentDidMount() {
    axios.get(this.rss)
      .then((response) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, 'text/xml');
        const items = xml.getElementsByTagName('item');

        return Array.prototype.slice.call(items, 0, 3);
      })
      .then((items) => {
        const posts = [];
        items.forEach((item) => {
          const date = moment(new Date(item.getElementsByTagName('pubDate')[0].textContent)).locale('en');
          const enclosure = item.getElementsByTagName('enclosure');
          const image = enclosure.length ? enclosure[0].getAttribute('url') : '';
          posts.push({
            title: item.getElementsByTagName('title')[0].textContent,
            href: item.getElementsByTagName('link')[0].textContent,
            image,
            date,
          });
        });

        this.setState({
          posts,
          loaded: true,
        });
      });
  }

  render() {
    return (
      <Wrapper pt={[10, 13]} pb={[7, 8]}>
        <Container>
          <Heading heavy as="h2" my={[4, 6]} fontSize={[5, 6, 7]} width={[1, 2 / 3]}>
            <FormattedMessage id="home.news.heading" />
          </Heading>
          {this.state.loaded &&
          <Flex align="flex-start" justify="space-between" wrap mt={12} mx={[-6, -6, -8]}>
            {this.state.posts.map((p, i) => (
              <NewsItem
                title={p.title}
                date={p.date}
                href={p.href}
                image={p.image}
                key={i}
              />))}
          </Flex>}
        </Container>
      </Wrapper>
    );
  }
}


export default News;
