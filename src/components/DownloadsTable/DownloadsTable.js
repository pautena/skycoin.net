import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import styled from 'styled-components';
import media from 'utils/media';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Link from 'components/Link';
import { COLORS, SPACE } from 'config';

const Table = styled.table`
  width: 100%;
  min-width: ${rem(800)};

  tr {
    padding-bottom: ${rem(10)};

    &:nth-child(odd){
      background: #F4F9FF;
    }
  }

  td, th {
    height: 50px;
    font-size: 14px;
    padding: 12px 30px;

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

const TableWrapper = styled(Text).attrs({
  as: 'div',
  color: 'black',
  fontSize: [1, 2],
  heavy: true,
}) `
  overflow-x: auto;
  margin-right: -${rem(SPACE[4])};
  padding-right: ${rem(SPACE[4])};
  margin-left: -${rem(SPACE[4])};
  padding-left: ${rem(SPACE[4])};
  margin-bottom: ${rem(SPACE[4])};
`;

const DownladsTable = ({ title, list, id }) => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]} id={id}>
          <FormattedMessage id={title} />
        </Heading>
      </Box>

      <TableWrapper>
        <Table>
          <tbody>
            {list.map(({ name, download, filetype, filesize }, i) => (
              <tr key={i}>
                <td>{name}</td>

                <td>
                  {filesize && <Text as="span" color="gray.7" heavy>
                    {filesize}
                  </Text>}
                </td>

                <td>
                  <Text as="span" color="gray.7" heavy>
                    {filetype}
                  </Text>
                </td>

                <td>
                  {download && <Link target="_blank" href={download}>
                    <FormattedMessage id="downloads.whitepapers.download" />
                  </Link>}
                </td>
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
