import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Fa from '@fortawesome/react-fontawesome';
import RSelect from 'react-select';
import 'react-select/dist/react-select.css';
import media from 'utils/media';

import { FONT_FAMILIES, FONT_SIZES, COLOR } from 'config';
import Container from 'components/Container';
import Link from 'components/Link';
/* eslint-disable react/prop-types */

const red = '#DA2824';

export const Content = styled(Container)`
  min-height: calc(100vh - 498px);
`;
export const SuccessText = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  margin-top: 25px;
`;
export const StyledLink = styled(Link)`
  color: ${COLOR.base};
  text-decoration: none;
  font-family: ${FONT_FAMILIES.sans};

  &:hover {
    color: ${COLOR.dark};
    text-decoration: none;
  }
`;
export const Form = styled.form`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-family: ${FONT_FAMILIES.sans};
  overflow: hidden;
  height: ${props => (props.hide ? '0' : 'auto')};

  ${media.sm.css`
    width: calc(100% - 50px);
    padding: 10px 0;${props => (props.hide ? '0' : '15px 25px 25px')};   
  `}
`;
export const Title = styled.div`
  border-bottom: ${props => (props.border ? '1px' : '0')} solid ${COLOR.textGrey};
  padding-bottom: 4px;
  margin: 10px 0 20px;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;
const IconStyle = {
  position: 'absolute',
  left: '30px',
  top: '18px',
  fontSize: '14px',
  zIndex: 2,
};
export const Icon = props => <Fa icon={props.icon} color={props.white ? '#fff' : COLOR.base} style={IconStyle} />;
export const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  max-width: ${props => (props.icon ? '500px' : '526px')};
  height: ${props => (props.additional ? '22px' : '100%')};
  padding: 5px 10px 5px ${props => (props.icon ? '30px' : '4px')};
  margin: 10px 0;
  outline: none;
  margin-left: 20px;
  border: 1px solid ${props => (props.errorBorder ? 'red' : COLOR.textGrey)}
`;
const InputCurrentCount = styled.span`
  font-size: ${rem(FONT_SIZES[1])};
  padding-left: 5px;
  color: ${props => ((props.count !== 0 && props.count < 66) ? 'red' : COLOR.textGrey)};
`;
const InputMaxCount = styled.span`
  font-size: ${rem(FONT_SIZES[1])};
  color: ${COLOR.textGrey};
`;
export const InputCount = props => (
  <div>
    <InputCurrentCount {...props}>
      {props.count}
    </InputCurrentCount>
    <InputMaxCount {...props}>
      /66~66
    </InputMaxCount>
  </div>
);
const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${props => (props.additional ? 'calc(100% - 150px)' : 'auto')};
  max-width: ${props => (props.additional ? '450px' : 'auto')};
`;
export const InputGroup = props => (
  <IconWrap {...props}>
    {
      props.icon ? <Icon icon={props.icon} /> : null
    }
    <Input {...props} />
  </IconWrap>
);

const LabelText = styled.span`
  margin-bottom: 3px;
  position: relative;

  &::after {
    position: absolute;
    right: -10px;
    font-size: 12px;
    top: 3px;
    content: ${props => (props.required ? '"*"' : '')};
    color: red;
  }
`;
const LabelWrap = styled.div`
  width: ${props => (props.width ? '100%' : 'auto')}
`;
export const Label = props => (<LabelWrap {...props}><LabelText {...props} /></LabelWrap>);

export const ErrorText = styled.div`
  color: #DA2824;
  font-size: ${props => (props.big ? rem(FONT_SIZES[2]) : rem(FONT_SIZES[1]))};
  width: ${props => (props.width ? '100%' : 'auto')};
`;
const RadioInput = styled.input.attrs({
  type: 'radio',
  name: 'officialMiner',
})`
  margin-right: 10px;
`;
const RadioWrap = styled.div`
  display: flex;
  padding: 5px 0;
  width: 100%;

  ${media.sm.css`
    padding: 15px 25px;
    width: calc(33% - 50px); 
  `};

`;
const InputWrap = styled.label`
  width: 100%;
  cursor: pointer;
  padding: 10px 2px;
`;
export const Radio = props => (
  <RadioWrap>
    <InputWrap>
      <RadioInput {...props} />
      {props.label}
    </InputWrap>
  </RadioWrap>
);

export const Select = styled(RSelect)`
  margin: 15px 0;
  max-width: 530px;
  margin-left: 20px
  width: 120px;
`;
export const TextArea = styled.textarea`
  width: calc(100% - 25px);
  max-width: 535px;
  min-height: 100px;
  outline: none;
  margin: 10px 0 20px 18px;
  border: 1px solid ${props => (props.hasError ? red : COLOR.textGrey)};

  ${media.sm.css`
    width: 100%;
  `};

`;
const Image = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-image: url(${props => props.img});
  background-position: center center;
  background-size: cover;
  border: 1px dashed ${COLOR.lightGrey};
  margin: 5px;

  &:hover {
    &::after {
      position: absolute;
      content: 'x';
      padding-right: 10px;
      font-size: 14px;
      text-align: right;
      color: #fff;
      top: 10;
      right: 7;
      width: calc(100% - 9px);
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
    }
  }
`;
const CloseWrap = styled.div`
  position: relative;
  cursor: pointer;
`;
export const ImageWrap = props => (
  <CloseWrap>
    <Image {...props} />
  </CloseWrap>
);
export const Subtitle = styled.div`
  width: 100%;
  color: ${props => (props.big ? '#666666' : COLOR.textGrey)};
  font-size: ${props => (props.big ? '15px' : '12px')};
  margin-left: ${props => (props.big ? '0' : '5px')};
`;
export const DropContainer = styled.div`
  margin: 15px 0;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const ImgIconStyle = {
  fontSize: '50px',
  color: `${COLOR.textGrey}`,
  marginBottom: '10px',
};
export const ImgIcon = props => (<Fa icon={props.icon} style={ImgIconStyle} />);
export const Button = styled.button`
  position: relative;
  width: 140px;
  border: none;
  padding: 10px 0;
  color: #fff;
  background-color: ${COLOR.base};
  cursor: pointer;
  outline: none;
  margin: 55px 0 30px;

  &:active {
    top: 1px;
  }
`;
