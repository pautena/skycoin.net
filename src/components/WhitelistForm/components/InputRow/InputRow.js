import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Label, InputCount, ErrorText, InputGroup, Icon } from '../components';

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);
const AutosuggestWrap = styled.div`
  position: relative;
`;

export default class InputRow extends Component {
  constructor(props) {
    super(props);

    this.renderAutosuggest = this.renderAutosuggest.bind(this);
  }

  shouldComponentUpdate(props) {
    const { values, touched, id, index } = props;
    const isNewValues = values !== this.props.values;
    const isTouched = typeof touched[id] !== 'undefined';
    let hasErrors = false;
    let defaultTouched;
    if (isNewValues) {
      return true;
    }

    if (!this.props.isArray) {
      hasErrors = isTouched && touched[id] !== this.props.touched[id];
      return hasErrors;
    }

    const oldTouched = get(this.props, `touched[${id}][${index}]`, defaultTouched);
    hasErrors = isTouched && touched[id].length && typeof touched[id][index] !== typeof oldTouched;

    return hasErrors;
  }

  renderAutosuggest() {
    const {
      suggestions,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      inputProps,
      icon,
    } = this.props;

    return (
      <AutosuggestWrap>
        {
          icon ? <Icon icon={icon} /> : null
        }
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </AutosuggestWrap>
    );
  }

  render() {
    const {
      label,
      required,
      id,
      icon,
      index,
      isArray,
      count,
      errorBorder,
      values,
      touched,
      errors,
      handleBlur,
      setInputValue,
    } = this.props;

    return (
      <Row>
        <Label required={required}>{label}</Label>
        {id !== 'nodeKeys' && errors &&
          touched[id] && <ErrorText>{errors}</ErrorText>
        }
        {
          isArray && <InputCount count={count}>{values.length}/66</InputCount>
        }
        {
          id !== 'country' ?
            <InputGroup
              maxLength={66}
              id={isArray ? `${id}[${index}]` : id}
              value={values}
              onChange={e => setInputValue(e.target.value, id, isArray, index)}
              onBlur={handleBlur}
              errorBorder={values.length < 66 ? errorBorder : null}
              icon={icon}
            /> : this.renderAutosuggest()
        }
      </Row>
    );
  }
}

InputRow.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
  onSuggestionsFetchRequested: PropTypes.func,
  onSuggestionsClearRequested: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.string,
  setInputValue: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  index: PropTypes.string,
  isArray: PropTypes.bool,
  count: PropTypes.string,
  errorBorder: PropTypes.bool,
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  values: PropTypes.string.isRequired,
  touched: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  errors: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  handleBlur: PropTypes.func.isRequired,
};
