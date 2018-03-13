import styled from 'styled-components';
import { space, width, fontSize } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import { FONT_FAMILIES, COLOR } from 'config';

const SubHeading = createComponentFromTagProp({
  tag: 'h3',
  prop: 'as',
  propsToOmit: ['fontSize', 'color', 'bg', 'mt', 'mb', 'my', 'heavy', 'caps'],
});

export default styled(SubHeading)`
  ${fontSize}
  ${space}
  ${width}

  font-family: ${props => (props.heavy ? `${FONT_FAMILIES.sansBold}` : `${FONT_FAMILIES.sans}`)};
  font-weight: 'normal';
  line-height: 1.5;
  text-transform: uppercase;
  color: ${COLOR.textLight};
`;
