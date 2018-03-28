import React from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import Link from 'components/Link';
import { TableWrapper } from 'components/Table';

import { COLORS, SPACE, BREAKPOINTS } from 'config';

const Table = styled.table`
  width: 100%;

  tr {
    padding-bottom: ${rem(10)};
  }

  td, th {
    height: ${rem(15)};
  }

  a {
    color: ${COLORS.base};
    text-decoration: none;
  }
`;

=======
import PropTypes from 'prop-types';
import { rem } from 'polished';
import Table, { TableWrapper } from 'components/Table';
import Link from 'components/Link';

import { COLORS, SPACE, BREAKPOINTS } from 'config';

>>>>>>> master
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
<<<<<<< HEAD
=======
      border-top: 1px solid ${COLORS.gray[1]};
>>>>>>> master
    }

    td {
      border: 0;
      display: block;
      height: auto;
<<<<<<< HEAD
      margin: 0;
=======
>>>>>>> master

      &:first-of-type {
        width: auto;
      }
    }
  }
`;

<<<<<<< HEAD
const DownloadTableSimple = ({ list }) => (
  <TableWrapper mb={[7, 10, 13]}>
=======

const DownloadTableSimple = ({ list }) => (
  <TableWrapper>
>>>>>>> master
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
