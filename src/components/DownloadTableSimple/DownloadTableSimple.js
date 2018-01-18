import React from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import Table, { TableWrapper } from 'components/Table';
import Link from 'components/Link';

import { COLORS, SPACE, BREAKPOINTS } from 'config';

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
      border-top: 1px solid ${COLORS.gray[1]};
    }

    td {
      border: 0;
      display: block;
      height: auto;

      &:first-of-type {
        width: auto;
      }
    }
  }
`;


const DownloadTableSimple = ({ list }) => (
  <TableWrapper>
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
