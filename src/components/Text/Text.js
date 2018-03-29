import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { space, width, fontSize, color } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import isArray from 'lodash/isArray';
import media from 'utils/media';
import { FONT_FAMILIES } from 'config';

const Text = createComponentFromTagProp({
  tag: 'p',
  prop: 'as',
  propsToOmit: ['fontSize', 'color', 'mt', 'mb', 'my', 'heavy', 'caps', 'textAlign'],
});

const textAlign = (align) => {
  let result;
  if (!isArray(align)) {
    result = `text-align: ${align};`;
  } else if (isArray(align) && align.length === 3) {
    result = css`
      text-align: ${align[0]};
      
      ${media.sm.css`
        text-align: ${align[1]};        
      `}
      
      ${media.md.css`
        text-align: ${align[2]};        
      `}
    `;
  }
  return result;
};

export default styled(Text)`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${FONT_FAMILIES.sans};
  line-height: ${rem(24)};
  text-transform: ${props => (props.caps ? 'uppercase' : 'none')};
  ${props => (props.textAlign && textAlign(props.textAlign))}

  ${media.sm.css`
    line-height: ${rem(28)};
  `}

  a {
    color: inherit;
  }
`;
