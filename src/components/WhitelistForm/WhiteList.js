import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { withFormik } from 'formik';
import yup from 'yup';
import get from 'lodash/get';
import Dropzone from 'react-dropzone';
import $ from 'jquery';
import compose from 'lodash/fp/compose';
import faImg from '@fortawesome/fontawesome-free-solid/faCloudUploadAlt';

import { COLOR } from 'config';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import InputRow from './components/InputRow/InputRow';
import { SuccessText, StyledLink, Content, Form, Row, InputGroup, Label, ErrorText, Title, Button, Radio, Select, TextArea, ImageWrap, Subtitle, DropContainer, ImgIcon } from './components/components';
import countries from './components/countries';
import { formInputs, nodeQuantityArray, osArray, brandArray, hardwareModels, dropzoneStyle } from './components/content';
import theme from './components/theme.css'; // eslint-disable-line no-unused-vars


const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Sorry, it cannot be empty'),
  name: yup.string()
    .required('Sorry, it cannot be empty'),
  telegram: yup.string(),
  country: yup.string()
    .required('Sorry, it cannot be empty'),
  officialMiner: yup.string(),
  walletAddress: yup.string()
    .matches(/^[1-9a-km-zA-HJ-NP-Z]{34,35}$/, 'Invalid wallet Address')
    .required('Sorry, it cannot be empty'),
  keysCount: yup.mixed().test('keysCount', 'Please complete all selections', function test(value) {
    const officialMiner = this.resolve(yup.ref('officialMiner'));
    let valid = true;

    if (officialMiner !== 'official' && typeof value !== 'string' && typeof value !== 'number') {
      valid = false;
    }
    return valid;
  }),
  os: yup.mixed().test('keysCount', 'Please complete all selections', function test(value) {
    const officialMiner = this.resolve(yup.ref('officialMiner'));
    let valid = true;

    if (officialMiner !== 'official' && typeof value !== 'string') {
      valid = false;
    }
    return valid;
  }),
  nodeKeys: yup.array()
    .required('Please fill the facies modeling table')
    .of(
      yup.string().min(66),
    ),
  moreNodeQuantity: yup.string(),
  moreNodeCount: yup.mixed()
    .test('moreNodeCount', 'The inputbox after More is required.', function test(value) {
      const hasMoreNodeQuantity = this.resolve(yup.ref('moreNodeQuantity')) === 'true';
      let valid = true;

      if (hasMoreNodeQuantity && typeof value !== 'string') {
        valid = false;
      }
      return valid;
    }),
  nodeDescription: yup.mixed().test('nodeDescription', 'Sorry, it cannot be empty', function test(value) {
    const officialMiner = this.resolve(yup.ref('officialMiner'));
    let valid = true;

    if (officialMiner !== 'official' && (typeof value === 'undefined')) {
      valid = false;
    }
    return valid;
  }),
  hardwareBrand: yup.string(),
  hardwareModel: yup.string(),
  otherHardwareModel: yup.string(),
  nodeHardware: yup.mixed().test('nodeHardware', 'Please complete all selections', function test() {
    const officialMiner = this.resolve(yup.ref('officialMiner'));
    const HashardwareBrand = typeof this.resolve(yup.ref('hardwareBrand')) !== 'undefined';
    const hardwareModel = this.resolve(yup.ref('hardwareModel'));
    const HasotherHardwareModel = typeof this.resolve(yup.ref('otherHardwareModel')) !== 'undefined';
    let valid = true;

    if (officialMiner === 'official') {
      return valid;
    }

    if (!HashardwareBrand || typeof hardwareModel === 'undefined') {
      valid = false;
      return valid;
    }
    if (hardwareModel === 'Other' && !HasotherHardwareModel) {
      valid = false;
    }
    return valid;
  }),
  files: yup.mixed().test('minerPhotos', 'Sorry, it cannot be empty', function test(value) {
    const isOfficialMiner = this.resolve(yup.ref('officialMiner')) === 'official';
    let valid = true;

    if (!isOfficialMiner && value.length < 1) {
      valid = false;
    }
    return valid;
  }),
});

function setNewArray(newVal, values, index) {
  const value = [...values.nodeKeys];
  value[index] = newVal;

  return value;
}

function serrialize(obj) {
  let url = ''; /* eslint-disable */
  for (let key in obj) { 
    url = url.concat(`${url === '' ? '' : '&'}${key}=${obj[key]}`);
  }
  return url;/* eslint-enable */
}

function createUrlData(values) {
  const initialData = {
    u: 'b55ae431a4517fe39b445547a',
    id: 'f3bb7777df',
    MERGE1: values.name,
    MERGE0: values.email,
    MERGE2: values.telegram,
    MERGE3: values.country,
    MERGE4: values.walletAddress,
    MERGE12: values.officialMiner,
  };

  values.nodeKeys.map((k, index) => { // eslint-disable-line array-callback-return
    initialData[`MERGE${index === 7 ? '13' : index + 5}`] = k;
  });
  if (values.officialMiner !== 'official') {
    initialData.MERGE14 = values.moreNodeCount || values.keysCount;
    initialData.MERGE16 = values.hardwareBrand;
    initialData.MERGE17 = values.otherHardwareModel || values.hardwareModel;
    initialData.MERGE18 = values.os;
    initialData.MERGE19 = values.nodeDescription;
    initialData.MERGE20 = values.morePublicKeys;
  }

  return serrialize(initialData);
}

// react-autosuggest information
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : countries.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue,
  );
};


class WhiteList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
    this.setNodeKeysArray = this.setNodeKeysArray.bind(this);
    this.setOfficialMiner = this.setOfficialMiner.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.renderNodeQuantityRow = this.renderNodeQuantityRow.bind(this);
    this.renderNodeOsROw = this.renderNodeOsROw.bind(this);
    this.renderNodeHardwareRow = this.renderNodeHardwareRow.bind(this);
    this.renderRadioButtons = this.renderRadioButtons.bind(this);
    this.renderNodeDescription = this.renderNodeDescription.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.renderMinerPhotosRow = this.renderMinerPhotosRow.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);

    this.state = { suggestions: [] };
  }

  componentDidMount() {
    this.setNodeKeysArray();
  }

  onChange(event, { newValue }) {
    this.props.setFieldValue('country', newValue);
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  onDrop(files) {
    this.props.setFieldValue('files', [...this.props.values.files, files[0]]);
  }

  setNodeKeysArray(c) {
    const isMoreQuantity = c === 'more';
    const count = isMoreQuantity ? 8 : parseInt(c, 10) || this.props.values.keysCount;
    const nodeKeys = new Array(count);

    nodeKeys.fill('');
    this.props.setFieldValue('nodeKeys', nodeKeys);
    this.props.setFieldValue('keysCount', count);
    this.props.setFieldValue('moreNodeQuantity', isMoreQuantity);
  }

  setOfficialMiner(count = 1, value) {
    this.props.setFieldValue('officialMiner', value);
    this.setNodeKeysArray(count);
  }

  setInputValue(inputVal, id, isArray, index) {
    const { values } = this.props;
    const newValue = isArray ? setNewArray(inputVal, values, index) : inputVal;
    this.props.setFieldValue(id, newValue);
  }

  deleteImg(i) {
    const newFiles = [...this.props.values.files];
    newFiles.splice(i, 1);
    this.props.setFieldValue('files', newFiles);
  }

  handleImageChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    const { setFieldValue } = this.props;

    reader.onload = () => {
      setFieldValue('file', file);
      setFieldValue('imagePreviewUrl', reader.result);
    };
    reader.readAsDataURL(file);
  }

  renderInput(props) {
    const { values, touched, errors, handleBlur } = this.props;
    const { label, required, id, icon, index } = props;
    const isArray = typeof index === 'number';

    const val = isArray ? values[id][index] : values[id];
    const count = get(values, `nodeKeys[${index}].length`, null);
    const errorBorder = id === 'nodeKeys' && errors[id] && touched[id] && typeof index === 'number'
      && touched[id][index];
    const inputProps = {
      value: values.country,
      onChange: this.onChange,
    };

    return (
      <InputRow
        label={label}
        required={required}
        id={id}
        icon={icon}
        index={index}
        count={count}
        values={val}
        errors={errors[id]}
        touched={touched}
        handleBlur={handleBlur}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        setInputValue={this.setInputValue}
        errorBorder={errorBorder}
        inputProps={inputProps}
        isArray={isArray}
      />
    );
  }

  renderNodeQuantityRow() {
    const { errors, touched, values, handleBlur } = this.props;
    const currentValue = values.moreNodeQuantity ? 'more' : values.nodeKeys.length;
    const hasError = errors.moreNodeCount && touched.moreNodeCount;

    return (
      <Row row wrap>
        <Label required width>Node Quantity</Label>
        {
          errors.nodeQuantity && touched.nodeQuantity &&
          <ErrorText width>{errors.nodeQuantity}</ErrorText>
        }
        { hasError && <ErrorText width>{errors.moreNodeCount}</ErrorText> }
        <Select
          value={currentValue}
          onChange={({ value }) => this.setNodeKeysArray(value)}
          options={nodeQuantityArray}
          clearable={false}
          wrapperStyle={{ width: values.moreNodeQuantity ? '120px' : '100%', marginLeft: '15px' }}
          style={{ height: '20px' }}
        />
        {
          values.moreNodeQuantity &&
            <InputGroup
              maxLength={66}
              id="moreNodeCount"
              value={values.moreNodeCount}
              onChange={e => this.setInputValue(e.target.value, 'moreNodeCount')}
              onBlur={handleBlur}
              errorBorder={hasError}
              additional
            />
        }
      </Row>
    );
  }

  renderNodeOsROw() {
    const { errors, touched, setFieldValue, values } = this.props;
    return (
      <Row>
        <Label required >Node OS</Label>
        {
          errors.os && touched.os &&
          <ErrorText>{errors.os}</ErrorText>
        }
        <Select
          value={values.os}
          clearable={false}
          onChange={({ value }) => setFieldValue('os', value)}
          wrapperStyle={{ marginLeft: '15px' }}
          options={osArray}
        />
      </Row>
    );
  }

  renderNodeHardwareRow() {
    const { errors, touched, values, setFieldValue, handleBlur } = this.props;

    return (
      <Row row wrap>
        <Label required width>Node Hardware</Label>
        {
          errors.nodeHardware && touched.hardwareBrand &&
          <ErrorText width>{errors.nodeHardware}</ErrorText>
        }
        <Select
          value={values.hardwareBrand}
          onChange={({ value }) => {
            setFieldValue('hardwareBrand', value);
            setFieldValue('hardwareModel', '');
            setFieldValue('otherHardwareModel', '');
          }}
          options={brandArray}
          clearable={false}
          wrapperStyle={{ width: '190px', marginLeft: '15px' }}
          style={{ height: '20px' }}
        />

        <Select
          value={values.hardwareModel}
          onChange={({ value }) => setFieldValue('hardwareModel', value)}
          options={hardwareModels[values.hardwareBrand]}
          clearable={false}
          wrapperStyle={{ width: '170px', marginLeft: '15px' }}
          style={{ height: '20px' }}
        />

        {
          values.hardwareModel === 'Other' &&
            <InputGroup
              maxLength={66}
              id="otherHardwareModel"
              value={values.otherHardwareModel}
              onChange={e => setFieldValue('otherHardwareModel', e.target.value)}
              onBlur={handleBlur}
              errorBorder={false}
              additional
            />
        }
      </Row>
    );
  }

  renderRadioButtons() {
    const { values } = this.props;

    return (
      <Row wrap row>
        <Label required width>Official Skywire Miner?</Label>
        <Radio
          label="Yes"
          onChange={() => this.setOfficialMiner(8, 'official')}
          checked={values.officialMiner === 'official'}
        />
        <Radio
          label="No"
          onChange={() => this.setOfficialMiner(1, 'No')}
          checked={values.officialMiner === 'No'}
        />
        <Radio
          label="i Don't Knoow"
          onChange={() => this.setOfficialMiner(1, 'iDontKnow')}
          checked={values.officialMiner === 'iDontKnow'}
        />
      </Row>
    );
  }

  renderNodeDescription() {
    const { errors, values, touched, setFieldValue } = this.props;

    return (
      <div>
        { errors.nodeDescription && touched.nodeDescription &&
          <ErrorText >{errors.nodeDescription}</ErrorText>
        }
        <TextArea
          hasError={errors.nodeDescription && touched.nodeDescription}
          value={values.nodeDescription}
          onChange={e => setFieldValue('nodeDescription', e.target.value)}
        />
      </div>
    );
  }

  renderMinerPhotosRow() {
    const { values, errors, touched } = this.props;
    return (
      <Row row>
        <Label required width>Miner Photos</Label>
        <Subtitle big>At least 3 photos from different perspectives are required</Subtitle>
        <Subtitle>Image formats like .jpg, .png, .gif, .bmp, .psd, .tiff are supported.</Subtitle>
        { errors.files && touched.files &&
          <ErrorText width>{errors.files}</ErrorText>
        }
        <DropContainer>
          { values.files.length ?
            values.files.map((f, i) => (
              <ImageWrap
                key={f.name}
                onClick={() => this.deleteImg(i)}
                img={f.preview}
                white
              />),
            ) : null
          }
          <Dropzone
            accept="image/jpeg, image/png, image/gif"
            onDrop={this.onDrop.bind(this)} // eslint-disable-line react/jsx-no-bind
            style={dropzoneStyle}
          >
            <ImgIcon icon={faImg} />
            <span>Choose Image </span>
            <span>Less than 3MB</span>
          </Dropzone>
        </DropContainer>
      </Row>
    );
  }

  render() {
    const { values, isSubmitting, handleSubmit, setFieldValue, intl, errors } = this.props;
    const isNotOfficialMiner = values.officialMiner !== 'official';

    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage({ id: 'skyminer.title' })}</title>
          <meta name="description" content={intl.formatMessage({ id: 'skyminer.description' })} />
        </Helmet>
        <Header social showBuy={false} />

        <Content>
          <Heading heavy as="h2" fontSize={[6, 7]} color={COLOR.textDark} mt={[8, 10]} mb={[5, 7]}>
            <FormattedMessage id="whitelist.heading" />
          </Heading>
          <Form onSubmit={handleSubmit} hide={values.successText}>
            <Title border>General Information</Title>
            { formInputs.map(item => this.renderInput({ ...item })) }

            <Title border>Hardware Details</Title>
            {this.renderRadioButtons()}

            { isNotOfficialMiner && this.renderNodeQuantityRow() }
            { isNotOfficialMiner && this.renderNodeHardwareRow() }
            { isNotOfficialMiner && this.renderNodeOsROw() }
            { isNotOfficialMiner && <Label required>Node Brief Description</Label> }
            { isNotOfficialMiner && this.renderNodeDescription() }

            { isNotOfficialMiner && this.renderMinerPhotosRow() }

            <Title border>Node Public Keys</Title>
            {
              values.nodeKeys.map((k, index) => (
                this.renderInput({ label: `#${index + 1}`, id: 'nodeKeys', index })
              ))
            }

            {values.moreNodeQuantity && <Title>More Public Keys</Title>}
            { values.moreNodeQuantity &&
              <TextArea
                value={values.morePublicKeys}
                onChange={e => setFieldValue('morePublicKeys', e.target.value)}
              />
            }
            {errors.error && <div><ErrorText big>{errors.error}</ErrorText></div>}
            <Button disabled={isSubmitting}>Submit</Button>
          </Form>
          {values.successText &&
            <div>
              <SuccessText>{values.successText}</SuccessText>
              <StyledLink to="/skyminer">
                Go to Skyminer page
              </StyledLink>
            </div>
          }
        </Content>
        <Footer />
      </div>
    );
  }
}

WhiteList.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
  values: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  touched: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  errors: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isSubmitting: PropTypes.bool.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

const props = {
  name: '',
  email: '',
  telegram: '',
  country: '',
  walletAddress: '',
  officialMiner: 'official',
  keysCount: 8,
  moreNodeQuantity: false,
  moreNodeCount: '',
  morePublicKeys: '',
  nodeKeys: [],
  nodeQuantity: null,
  os: null,
  nodeDescription: '',
  hardwareBrand: '',
  hardwareModel: '',
  otherHardwareModel: '',
  files: [],
  successText: '',
};

export default injectIntl(
  compose(
    withFormik({
      mapPropsToValues: () => props,
      validationSchema: schema,
      handleSubmit: (values, { setSubmitting, setErrors, setFieldValue }) => {
        const url = 'https://skycoin.us18.list-manage.com/subscribe/post-json?';
        const formatedData = createUrlData(values);

        $.ajax({
          url: `${url}&amp;id=f3bb7777df&c=?`,
          data: formatedData,
          dataType: 'jsonp',
        }).then((data) => {
          const error = data.msg.match(/.{1,}\./i) || 'error';

          if (data.result === 'error') {
            setErrors({ error });
          } else {
            setFieldValue('successText', data.msg);
          }
        })
          .fail(err => setErrors({ error: err.msg }));

        setSubmitting(false);
      },
    }),
  )(WhiteList));

