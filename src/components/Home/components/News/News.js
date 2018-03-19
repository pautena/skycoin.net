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

import { COLOR, BOX_SHADOWS, BORDER_RADIUS } from 'config';

const Wrapper = styled(Box)`
  background: ${COLOR.white};
  overflow: hidden;
`;

const NewsItem = ({ title, date }) => (
  <Flex width={[1, 1 / 2, 1 / 3]} px={[6, 6, 8]} mb={[6, 8]} align="flex-start">
    <NewsContainer>
      {date.format('MMMM DD, YYYY')}
      <Heading heavy as="h4" mb={1} fontSize={4}>
        {title}
      </Heading>
    </NewsContainer>
  </Flex>
);

const NewsContainer = styled.div`
  display: block;
  width: 100%;
  box-shadow: ${BOX_SHADOWS.box};
  border-radius: ${BORDER_RADIUS.base};
`;

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: momentPropTypes.momentObj.isRequired,
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
    this.rss = '/blog.xml';
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
          posts.push({
            title: item.getElementsByTagName('title')[0].textContent,
            href: item.getElementsByTagName('link')[0].textContent,
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
            {this.state.posts.map((p, i) => <NewsItem title={p.title} date={p.date} key={i} />)}
          </Flex>}
        </Container>
      </Wrapper>
    );
  }
}


export default News;
