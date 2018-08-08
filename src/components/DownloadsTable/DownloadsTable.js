import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import media from 'utils/media';

import { TableWrapper } from 'components/Table';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { COLORS, SPACE, COLOR } from 'config';

const Table = styled.table`
  width: 100%;

  tr {
    padding-bottom: ${rem(10)};

    &:nth-child(odd){
      background: ${COLOR.lightBlueGrey};
    }
  }

  td, th {
    padding: ${rem(SPACE[2])} ${rem(SPACE[4])};

    ${media.sm.css`
      padding: ${rem(SPACE[4])} ${rem(SPACE[8])};
    `}
  }
  
  tr {
    display: block;    
    ${media.sm.css`
      display: table-row;
    `}
  }
  
  td {
    display: inline-block;
    
    &:first-child {
      display: block;
    }
    
    ${media.sm.css`
      display: table-cell;
    `}
  } 
  
  a {
    color: ${COLORS.base};
    text-decoration: none;
  }
`;

const FixedTd = styled.td`
  ${media.sm.css`
    width: ${rem(70)};
  `}
`;

const Link = styled.a`
  color: ${COLORS.base};
  text-decoration: none;
`;

const DownladsTable = ({ title, list, id }) => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[6, 7]} color="black" mb={[rem(40), rem(40)]} id={id}>
          <FormattedMessage id={title} />
        </Heading>
      </Box>

      <TableWrapper mb={[7, 10, 13]}>
        <Table>
          <tbody>
            {list.map(({ name, download, filetype, filesize }, i) => (
              <tr key={i}>
                <td>
                  <FormattedMessage id={name} />
                </td>

                <FixedTd>
                  {filesize && <Text as="span" color="gray.7" heavy>
                    {filesize}
                  </Text>}
                </FixedTd>

                <FixedTd>
                  <Text as="span" color="gray.7" heavy>
                    {filetype}
                  </Text>
                </FixedTd>

                <FixedTd>
                  {download && <Link target="_blank" href={download}>
                    <FormattedMessage id="downloads.whitepapers.download" />
                  </Link>}
                </FixedTd>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  </div>
);

DownladsTable.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
};

DownladsTable.defaultProps = {
  title: '',
  id: '',
};

export default DownladsTable;
