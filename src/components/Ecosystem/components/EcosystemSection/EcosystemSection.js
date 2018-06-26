import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import Container from 'components/Container';
import media from 'utils/media';
import { COLOR, COLORS } from 'config';
import * as content from 'components/Ecosystem/content';
import Button from 'components/Button';

import Illustrations from './components/Illustrations';
import Info from './components/Info';

const ContentItem = styled(Flex)`
  background-color: ${props => ((props.bg && COLOR[props.bg]) || (props.bg && COLORS[props.bg]) || 'transparent')};
  flex-direction: row-reverse;
`;
const Btn = styled(Button)`
  margin-right: 0;

  ${media.md.css`
    margin-right: 25px;
  `}
`;

const BtnContainer = styled(Flex)`
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;

  ${media.md.css`
    flex-direction: row;
    margin-bottom: 0;
  `}
`;

const Ecosystem = () => (
  <Container>
    <Heading heavy as="h2" mb={2} mt={[5, 7]} fontSize={[6, 7]} color={COLOR.textDark}>
      <FormattedMessage id="ecosystem.heading" />
    </Heading>
    <SubHeading fontSize={2} mb={[8, 10]}>
      <FormattedMessage id="ecosystem.subheading" />
    </SubHeading>

    <ContentItem bg="lightBlue" py={10} pr={[7, 7, 8]} pl={[7, 0, 8]} wrap mt={[5, 8]} mx={[-7, 0]}>
      <Box width={[1, 3 / 5, 4 / 6]}>
        <Info heading="ecosystem.skycoin.heading" body="ecosystem.skycoin.body" />
      </Box>
      <Box width={[1, 2 / 5, 2 / 6]}>
        <Illustrations items={content.skycoin} />
      </Box>
    </ContentItem>

    <ContentItem py={10} pr={[7, 7, 8]} pl={[7, 0, 8]} wrap mx={[-7, 0]}>
      <Box width={[1, 3 / 5, 4 / 6]}>
        <Info heading="ecosystem.skywire.heading" body="ecosystem.skywire.body" />
        <BtnContainer px={[0, 4, 8]}>
          <Btn
            href="/skywire"
            color="base"
            bg="white"
            pill
            outlined
            mt={[5, 6]}
          >
            <FormattedMessage id="ecosystem.skywire.skywireBtn" />
          </Btn>
          <Btn
            href="/cxo"
            color="base"
            bg="white"
            pill
            outlined
            mt={[5, 6]}
          >
            <FormattedMessage id="ecosystem.skywire.cxoBtn" />
          </Btn>
        </BtnContainer>
      </Box>
      <Box width={[1, 2 / 5, 2 / 6]}>
        <Illustrations items={content.skywire} />
      </Box>
    </ContentItem>

    <ContentItem bg="lightBlue" py={10} pr={[7, 7, 8]} pl={[7, 6, 8]} wrap mx={[-7, 0]}>
      <Box width={[1, 3 / 5, 4 / 6]}>
        <Info heading="ecosystem.obelisk.heading" body="ecosystem.obelisk.body" />
        <BtnContainer px={[0, 4, 8]}>
          <Btn href="/obelisk" color="base" bg={COLOR.lightBlue} pill outlined mt={[5, 6]} >
            <FormattedMessage id="ecosystem.obelisk.btn" />
          </Btn>
        </BtnContainer>
      </Box>
      <Box width={[1, 2 / 5, 2 / 6]}>
        <Illustrations items={content.obelisk} />
      </Box>
    </ContentItem>

    <ContentItem py={10} pr={[7, 7, 8]} pl={[7, 0, 8]} wrap mx={[-7, 0]}>
      <Box width={[1, 3 / 5, 4 / 6]}>
        <Info heading="ecosystem.experiments.heading" body="ecosystem.experiments.body" />
        <BtnContainer px={[0, 4, 8]}>
          <Btn
            href="/fiber"
            color="base"
            bg="white"
            pill
            outlined
            mt={[5, 6]}
          >
            <FormattedMessage id="ecosystem.experiments.btn" />
          </Btn>
        </BtnContainer>
      </Box>
      <Box width={[1, 2 / 5, 2 / 6]}>
        <Illustrations items={content.experiments} />
      </Box>
    </ContentItem>
  </Container>
);

export default Ecosystem;
