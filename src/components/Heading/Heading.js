import styled from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import { FONT_FAMILIES } from 'config';

const Heading = createComponentFromTagProp({
  tag: 'h2',
  prop: 'as',
  propsToOmit: ['fontSize', 'color', 'bg', 'mt', 'mb', 'my', 'heavy', 'caps'],
});

export default styled(Heading)`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${props => (props.heavy ? `${FONT_FAMILIES.sansBold}` : `${FONT_FAMILIES.sans}`)};
  font-weight: 400;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '1.5')};
`;
