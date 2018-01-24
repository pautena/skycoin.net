/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderPost"] }] */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import { SPACE, COLORS, FONT_SIZES, FONT_FAMILIES } from 'config';
import { Flex } from 'grid-styled';

import Heading from 'components/Heading';
import Container from 'components/Container';
import Link from 'components/Link';

const StyledLink = styled(Link)`
  color: #000;
  font-size: ${rem(FONT_SIZES[4])};
  font-family: ${FONT_FAMILIES.sans};
  margin-bottom: ${rem(SPACE[2])};
  text-decoration: none;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  padding: ${rem(SPACE[6])} 0;
  border-bottom: 2px solid ${COLORS.gray[1]};
`;

export default class Blog extends PureComponent {
  constructor() {
    super();

    this.state = {
      posts: [],
      loaded: false,
    };
    this.rss = 'https://www.skycoin.net/blog/index.xml';

    this.renderPost = this.renderPost.bind(this);
  }

  componentDidMount() {
    axios.get(this.rss)
      .then((response) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, 'text/xml');
        const items = xml.getElementsByTagName('item');

        return Array.prototype.slice.call(items, 0, this.props.count);
      })
      .then((items) => {
        const posts = [];
        items.forEach((item) => {
          const date = moment(new Date(item.getElementsByTagName('pubDate')[0].textContent)).format('YYYY.DD.MM');
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

  renderPost(item, key) {
    return (
      <StyledLink
        target="_blank"
        key={key}
        href={item.href}
      >{item.date} &mdash; {item.title}</StyledLink>
    );
  }


  render() {
    return (
      <Wrapper>
        <Container>
          <Flex column align="flex-start">
            <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
              <FormattedMessage id="home.blog.heading" />
            </Heading>
            {this.state.posts.map(this.renderPost)}
          </Flex>
        </Container>
      </Wrapper>
    );
  }
}

Blog.propTypes = {
  count: PropTypes.number,
};

Blog.defaultProps = {
  count: 3,
};
