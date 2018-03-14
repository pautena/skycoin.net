import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import Link from 'components/Link';
import { TableWrapper } from 'components/Table';

import media from 'utils/media';

import { COLORS, SPACE, BREAKPOINTS } from 'config';

const Table = styled.table`
  width: 100%;
  min-width: ${rem(800)};

  tr {
    padding-bottom: ${rem(10)};
  }

  td, th {
    height: ${rem(15)};

    ${media.sm.css`
      height: ${rem(20)};
    `}
  }

  a {
    color: ${COLORS.base};
    text-decoration: none;
  }

  margin-bottom: 100px;
`;

const StyledTable = Table.extend`
  td {
    &:first-of-type {
      width: 77.33%;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}rem) {
    min-width: 0;
    border: 0;

    tr {
      display: block;
      padding: ${rem(SPACE[4])} 0;
    }

    td {
      border: 0;
      display: block;
      height: auto;
      margin: 0;

      &:first-of-type {
        width: auto;
      }
    }
  }
`;


const DownloadTableSimple = ({ list }) => (
  <TableWrapper mx={-SPACE[4]} px={SPACE[4]} mb={SPACE[4]}>
    <StyledTable>
      <tbody>
        {list.map(({ name, download }, i) => (
          <tr key={i}>
            <td>
              <Link target="_blank" href={download}>
                {name}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

DownloadTableSimple.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DownloadTableSimple;
