import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { SPACE } from 'config';
import Table, { TableWrapper } from 'components/Table';
import Text from 'components/Text';
import * as icons from './icons';

const Icon = styled.img`
  max-width: ${rem(30)};
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(SPACE[2])};
`;

const Th = styled.th`
  padding: ${props => (props.count > 1 ? 'inherit' : `${rem(SPACE[4])} 0`)};
`;

const Row = styled.tr`
  text-align: center;
  background-color: ${props => (props.display ? '#EDEDED' : 'white')};

  td {
    border-top: 1px solid ${props => (props.light ? '#D2D3D4' : 'inherit')};
  }
`;

const A = styled.a`
  opacity: ${props => (props.linkcolor ? 1 : 0.5)};
`;


const ApplicationTable = ({ list }) => {
  let OSName = -1;
  if (navigator.appVersion.indexOf('Win') !== -1) OSName = 1;
  if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 0;
  if (navigator.appVersion.indexOf('X11') !== -1) OSName = 2;
  if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 2;

  return (
    <TableWrapper>
      <Table>
        <tbody>
          {list.map(({ platform, icon, builds }, platformIndex) =>
            builds.map((build, buildIndex) =>
              build.architectures.map((architecture, architectureIndex) => (
                <Row
                  light={buildIndex !== 0 && buildIndex !== builds.length}
                  key={`${platformIndex}-${buildIndex}-${architectureIndex}`}
                  display={platformIndex === OSName}
                >
                  {buildIndex === 0 &&
                    <Th
                      count={builds.length}
                      rowSpan={builds.reduce((a, { architectures: b }) => a + b.length, 0)}
                    >
                      <Icon src={icons[icon]} />
                      <FormattedMessage id={platform} />
                    </Th>
                  }

                  {architectureIndex === 0 &&
                    <td rowSpan={build.architectures.length}>
                      <FormattedMessage id={build.name} />
                    </td>
                  }

                  <td>{architecture.name}</td>

                  <td>
                    <A
                      href={architecture.download}
                      linkcolor={platformIndex === OSName || OSName < 0}
                    >
                      <FormattedMessage id="downloads.wallet.download" />
                    </A>
                  </td>

                  {architecture.signature &&
                    <td>
                      <a
                        href={architecture.signature}
                        linkcolor={platformIndex === OSName || OSName < 0}
                      >
                        <FormattedMessage id="downloads.wallet.signature" />
                      </a>
                    </td>}

                  <td>
                    <Text as="span" color="gray.7" heavy>
                      {architecture.filetype}
                    </Text>
                  </td>

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
