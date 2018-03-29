import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';
import { SPACE, COLORS } from 'config';
import Text from 'components/Text';
import { TableWrapper } from 'components/Table';

import * as icons from './icons';

const TdLink = styled.td`
  display: block;
`;

const Table = styled.table`
  width: 100%;
  border-bottom: 2px solid white;

  tr td, 
  tr th {
    ${media.sm.css`
      border-bottom: 1px solid rgba(146,164, 186, 0.2);
    `}
  }

  td, th {
    ${media.sm.css`
      height: ${rem(50)};
    `}
  }

  a {
    color: ${COLORS.base};
  }


  tr {
    display: block;
    padding-bottom: ${rem(SPACE[4])};
    
    ${media.sm.css`
      display: table-row;
      padding-bottom: 0; 
    `}
  }
  
  td {
    display: inline-block;
    ${media.sm.css`
      display: table-cell;
    `}
  } 
  
  th, 
  ${TdLink} {
    display: block;
    ${media.sm.css`
      display: table-cell;
    `}
  }
`;

const Icon = styled.img`
  max-width: ${rem(30)};
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(SPACE[2])};
`;

const Th = styled.th`
  padding: ${rem(SPACE[4])}; 
  
  ${media.sm.css`
    padding: 0 ${rem(SPACE[6])};
  `}
  ${media.md.css`
    padding: 0 ${rem(SPACE[10])};
  `}
`;

const Row = styled.tr`
  text-align: center;
  background-color: ${props => (props.light ? '#F4F9FF' : 'white')};

  ${media.sm.css`
    height: 80px;
    border-bottom: 1px solid ${props => (props.light ? '#F4F9FF' : 'white')};
    border-top: ${props => (props.isFirst ? '2px' : '1px')} solid ${props => (props.light ? '#F4F9FF' : 'white')};
  `}
`;

const A = styled.a`
  opacity: ${props => (props.linkcolor ? 1 : 0.5)};
  text-decoration: none;
`;

const Platform = styled(Text) `
  display:block;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  text-align: center;
`;

const Comment = styled(Text) `
  color:#92A4BA;
`;

const TdPadding = styled.td`
  text-align:left;
  
  ${media.sm.css`
    padding-left: ${rem(SPACE[10])};
  `}

  ${media.md.css`
    padding-left: ${rem(SPACE[13])};
  `}
`;


const ApplicationTable = ({ list }) => {
  let OSName = -1;
  if (navigator.appVersion.indexOf('Win') !== -1) OSName = 1;
  if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 0;
  if (navigator.appVersion.indexOf('X11') !== -1) OSName = 2;
  if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 2;

  return (
    <TableWrapper mb={[7, 10, 13]}>
      <Table>
        <tbody>
          {list.map(({ platform, icon, builds }, platformIndex) =>
            builds.map((build, buildIndex) =>
              build.architectures.map((architecture, architectureIndex) => (
                <Row
                  light={platformIndex % 2 === 0}
                  key={`${platformIndex}-${buildIndex}-${architectureIndex}`}
                  display={platformIndex === OSName}
                  isFirst={buildIndex === 0 && architectureIndex === 0}
                >
                  {buildIndex === 0 &&
                    <Th
                      count={builds.length}
                      rowSpan={builds.reduce((a, { architectures: b }) => a + b.length, 0)}
                    >
                      <Platform>
                        <FormattedMessage id={platform} />
                      </Platform>
                      <Icon src={icons[icon]} />
                    </Th>
                  }

                  {architectureIndex === 0 &&
                    <TdPadding rowSpan={build.architectures.length}>
                      <FormattedMessage id={build.name} />
                      <Comment as="span">
                        <FormattedMessage id={`${build.name}Comment`} />
                      </Comment>
                    </TdPadding>
                  }

                  <td>{architecture.name}</td>

                  <td>
                    <Text as="span" color="gray.7" heavy>
                      {architecture.filetype}
                    </Text>
                  </td>

                  <TdLink>
                    <A
                      href={architecture.download}
                      linkcolor={platformIndex === OSName || OSName < 0}
                    >
                      <FormattedMessage id="downloads.wallet.download" />
                    </A>
                  </TdLink>

                  {architecture.signature && <td>
                    <A
                      href={architecture.signature}
                      linkcolor={platformIndex === OSName || OSName < 0}
                    >
                      <FormattedMessage id="downloads.wallet.signature" />
                    </A>
                  </td>}

                  <td>
                    <Text as="span" color="gray.7" heavy>
                      {architecture.version}
                    </Text>
                  </td>
                </Row>
              )),
            ),
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

ApplicationTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ApplicationTable;
