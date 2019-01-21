import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import media from 'utils/media';
import Header from 'components/Header';
import SubHeading from 'components/SubHeading';
import Heading from 'components/Heading';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Text from 'components/Text';
import SignUpSection from 'components/SignUpSection';

import { FONT_FAMILIES, FONT_SIZES, COLOR, BORDER_RADIUS, BOX_SHADOWS, SPACE } from 'config';
import { en, zh, ko, ru, ja } from './content/bios';

import ArrowIcon from './expander.svg';
import bg from './bg.svg';
import userPlaceholder from './content/images/default.svg';

const Wrapper = styled(Box)`
  background-color: ${props => (props.bg || 'transparent')};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  margin: auto;
  background: ${COLOR.white};
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.image};
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

const Title = styled.strong`
  display: block;
  font-family: ${FONT_FAMILIES.sans};
  color: #92A4BA;
  font-size: 14px;
  margin: 0 0 1em;
  margin-top: 8px;
`;

const Bio = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.8;
  margin-top: 26px;
  font-size: 14px;
`;

const localeList = { en, zh, ko, ru, ja };

const getLocale = (locale) => {
  const language = localeList[locale];
  return language;
};

const QuoteLine = styled.div`
  border: 1px solid #92A4BA;
  border-radius: 2px;
  width: 1px;
  background-color: #92A4BA;
`;

const Quote = styled.div`
  padding-left: ${rem(SPACE[7])};
`;

const QuoteContainer = styled.div`
  display: flex;
  margin: ${rem(85)} 0;
`;

const Banner = styled.img`
  width: 100%;
  margin-bottom: ${rem(SPACE[8])};
  
  ${media.sm.css`
    margin-bottom: ${rem(SPACE[10])};    
  `}
  
  ${media.md.css`
    margin-bottom: ${rem(SPACE[13])};
  `}
`;

const FoundersHeading = styled(Heading) `
  text-transform: uppercase;
  text-align: center;
  font-size: ${rem(FONT_SIZES[2])};
  font-weight: bold;
  margin-bottom: ${rem(40)};
`;

const Person = styled(Box) `
`;

const PersonName = styled(Heading) `
  margin-top: ${rem(24)};
  font-size: ${rem(20)};
`;

const A = styled.a`
  opacity: ${props => (props.linkcolor ? 1 : 0.5)}; 
  cursor: pointer; 
  text-decoration: none;
`;

const Arrow = styled.img`
  margin-left: 12px;
  & path {
    fill: #0072FF;
  }

  transform: rotate(${props => (props.dir === 'down' ? '180deg ' : '0deg')});
  width: 12px;
  height: 12px;
`;

class Expander extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
    };
    this.toggleExpander = this.toggleExpander.bind(this);
  }
  toggleExpander() {
    this.setState({ ...this.state, collapsed: !this.state.collapsed });
  }
  render() {
    const { children, intl } = this.props;
    const { collapsed } = this.state;
    return (<div>
      {!collapsed && children}
      {collapsed && <A
        onClick={() => this.toggleExpander()}
      >
        <Text color="#0072FF" fontSize={12}>
          {getLocale(intl.locale).readBio}
          <Arrow dir="up" src={ArrowIcon} />
        </Text>
      </A>}
      {!collapsed && <A
        onClick={() => this.toggleExpander()}
      >
        <Text color="#0072FF" fontSize={12}>
          {getLocale(intl.locale).hide}
          <Arrow dir="down" src={ArrowIcon} />
        </Text>
      </A>}
    </div>);
  }
}

Expander.propTypes = {
  children: PropTypes.element.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

Expander.propTypes = {
  children: PropTypes.element.isRequired,
};

const ImgPlaceholder = styled(Img)`
  width: 70%;
`;

const TeamPage = ({ intl }) => (
  <div>
    <Helmet>
      <title>{getLocale(intl.locale).title}</title>
      <meta
        name="description"
        content={getLocale(intl.locale).description}
      />
    </Helmet>
    <Header border />
    <Banner src={bg} />
    <Container>
      <Wrapper mb={[7, 9]}>
        <Heading
          as="h1"
          heavy
          fontSize={[6, 7]}
          mb={2}
          color={COLOR.textDark}
        >
          {getLocale(intl.locale).title}
        </Heading>
        <SubHeading fontSize={[1, 1, 2]} normal>
          {getLocale(intl.locale).subtitle}
        </SubHeading>
        <QuoteContainer>
          <QuoteLine />
          <Quote>
            <Text style={{ margin: 0 }} fontSize={rem(FONT_SIZES[5])} color="#07172E">
              {getLocale(intl.locale).quote}
            </Text>
          </Quote>
        </QuoteContainer>

        <section>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).founders.title}
          </FoundersHeading>
          <Flex wrap justify="center" mx={[-6, -7]}>
            {getLocale(intl.locale).founders.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 3]} px={[6, 7]}>
                <Flex column>
                  <Box>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <ImgPlaceholder src={userPlaceholder} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </Box>
                  <Box>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </Box>
                </Flex>
              </Person>
            ))}
          </Flex>
        </section>
      </Wrapper>
    </Container>

    <Wrapper bg="#F4F9FF" pb={8} pt={[8, 11, 13]}>
      <Container>
        <section>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).advisors.title}
          </FoundersHeading>
          <Flex wrap justify="flex-start" mx={[-6, -7]}>
            {getLocale(intl.locale).advisors.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 4]} px={[6, 7]} mb={[4, 5, 6]}>
                <Flex column>
                  <Box>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <ImgPlaceholder src={userPlaceholder} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </Box>
                  <Box>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </Box>
                </Flex>
              </Person>
            ))}
          </Flex>
        </section>
      </Container>
    </Wrapper>

    <Wrapper pb={8} pt={[8, 11, 13]}>
      <Container>
        <section>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).investors.title}
          </FoundersHeading>
          <Flex wrap justify="flex-start" mx={[-6, -7]}>
            {getLocale(intl.locale).investors.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 4]} px={[6, 7]} mb={[4, 5, 6]}>
                <Flex column>
                  <Box>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        /* eslint-disable */
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <ImgPlaceholder src={userPlaceholder} alt="Anonymous team member" />
                        /* eslint-disable */
                      }
                    </ImageContainer>
                  </Box>
                  <Box>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </Box>
                </Flex>
              </Person>
            ))}
          </Flex>
        </section>
      </Container>
    </Wrapper>

    {/*<Wrapper bg="#F4F9FF"  pb={8} pt={[8, 11, 13]}>*/}
      {/*<Container>*/}
        {/*<section>*/}
          {/*<FoundersHeading*/}
            {/*as="h2"*/}
            {/*fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}*/}
            {/*color="#07172E"*/}
            {/*mb={[3, 5]}*/}
          {/*>*/}
            {/*{getLocale(intl.locale).asia.title}*/}
          {/*</FoundersHeading>*/}
          {/*<Flex wrap justify="flex-start" mx={[-6, -7]}>*/}
            {/*{getLocale(intl.locale).asia.bios.map(({ name, picture, title, bio }, index) => (*/}
              {/*<Person key={index} width={[1, 1 / 4]} px={[6, 7]} mb={[4, 5, 6]}>*/}
                {/*<Flex column>*/}
                  {/*<Box>*/}
                    {/*<ImageContainer>*/}
                      {/*{(picture && picture !== '') ?*/}
                        {/*<Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :*/}
                        {/*<ImgPlaceholder src={userPlaceholder} alt="Anonymous team member" />*/}
                      {/*}*/}
                    {/*</ImageContainer>*/}
                  {/*</Box>*/}
                  {/*<Box>*/}
                    {/*<PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>*/}
                    {/*{title && <Title>{title}</Title>}*/}
                    {/*{bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}*/}
                  {/*</Box>*/}
                {/*</Flex>*/}
              {/*</Person>*/}
            {/*))}*/}
          {/*</Flex>*/}
        {/*</section>*/}
      {/*</Container>*/}
    {/*</Wrapper>*/}

    {/* <Wrapper bg="#F4F9FF" pb={8} pt={[8, 11, 13]}>
      <Container>
        <section>
          <FoundersHeading
            as="h2"
            fontSize={[rem(FONT_SIZES[3]), rem(FONT_SIZES[3])]}
            color="#07172E"
            mb={[3, 5]}
          >
            {getLocale(intl.locale).west.title}
          </FoundersHeading>
          <Flex wrap justify="flex-start" mx={[-6, -7]}>
            {getLocale(intl.locale).west.bios.map(({ name, picture, title, bio }, index) => (
              <Person key={index} width={[1, 1 / 4]} px={[6, 7]} mb={[4, 5, 6]}>
                <Flex column>
                  <Box>
                    <ImageContainer>
                      {(picture && picture !== '') ?
                        <Img src={require(`./content/images/${picture}`)} alt={`Picture of ${name}`} /> :
                        <ImgPlaceholder src={userPlaceholder} alt="Anonymous team member" />
                      }
                    </ImageContainer>
                  </Box>
                  <Box>
                    <PersonName heavy as="h2" fontSize={[3, 4]} my={0}>{name}</PersonName>
                    {title && <Title>{title}</Title>}
                    {bio && <Expander intl={intl}><Bio>{bio}</Bio></Expander>}
                  </Box>
                </Flex>
              </Person>
            ))}
          </Flex>
        </section>
      </Container>
    </Wrapper> */}

    <SignUpSection />

    <Footer />
  </div>
);

TeamPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(TeamPage);
