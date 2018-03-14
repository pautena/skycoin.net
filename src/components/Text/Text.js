import styled from 'styled-components';
import { rem } from 'polished';
import { space, width, fontSize, color } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import media from 'utils/media';
import { FONT_FAMILIES } from 'config';

const Text = createComponentFromTagProp({
  tag: 'p',
  prop: 'as',
  propsToOmit: ['fontSize', 'color', 'mt', 'mb', 'my', 'heavy', 'caps', 'textAlign'],
});

export default styled(Text)`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${FONT_FAMILIES.sans};
  line-height: ${rem(24)};
  text-transform: ${props => (props.caps ? 'uppercase' : 'none')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};

  ${media.sm.css`
    line-height: ${rem(28)};
  `}

  a {
    color: inherit;
  }
`;
