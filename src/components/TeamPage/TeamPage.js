import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Header from 'components/Header';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';

import { FONT_FAMILIES, BREAKPOINTS } from 'config';
import { en, zh, ko, ru } from './content/bios';

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Description = styled.strong`
  font-family: ${FONT_FAMILIES.sansBold};
`;

const Person = styled.article`
  border-bottom: 1px solid #eceef0;

  @media (max-width: ${BREAKPOINTS.sm}rem) {

  }
`;

const ImageContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 100%;
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
`;

const NoImg = styled.div`
  background: #eceef0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Title = styled.strong`
  display: block;
  font-family: ${FONT_FAMILIES.sansItalic};
  margin: 0 0 1em;
`;

const Bio = styled.p`
  font-family: ${FONT_FAMILIES.sans};
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const localeList = { en, zh, ko, ru };

const getLocale = (locale) => {
  const language = localeList[locale];
  return language;
};

const TeamPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'team.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'team.description' })}
      />
    </Helmet>
    <Header border />
    <Container>
      <Wrapper>
        <Heading heavy as="h1" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          {getLocale(intl.locale).title}
        </Heading>
        <Description>{getLocale(intl.locale).description}</Description>
        {getLocale(intl.locale).bios.west.map(({ name, picture, title, bio }, index) => (
          <Person key={index}>
            <Flex wrap py={[7, 8]}>
              <StyledBox width={[1 / 1, 1 / 4]} pr={[4, 6]}>
                <ImageContainer>
                  {picture ?
                    <Img src={`./content/images/${picture}`} alt={`Picture of ${name}`} /> : // eslint-disable-line global-require
                    <NoImg />
                  }
                </ImageContainer>
              </StyledBox>
              <StyledBox width={[1 / 1, 3 / 4]}>
                <Heading heavy as="h2" fontSize={[3, 4]}>{name}</Heading>
                <Title>{title}</Title>
                <Bio>{bio}</Bio>
              </StyledBox>
            </Flex>
          </Person>
        ))}
      </Wrapper>
    </Container>
    <Footer />
  </div>
);

TeamPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(TeamPage);
