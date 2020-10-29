import React from 'react';
import ReactDOM from 'react-dom';
import { Radiobox } from 'react-inputs-validation';
import { Textbox } from 'react-inputs-validation';
import { Select } from 'react-inputs-validation';


<Radiobox
  attributesInput={{ // Optional.
    id: 'type',
    name: 'type',
  }}
  value={type} // Optional.[String].Default: "".
  optionList={[
    { id: 'shirt', name: 'shirt' },
    { id: 'pants', name: 'pants' },
    { id: 'shoes', name: 'shoes' }
    { id: 'skirt', name: 'skirt' }
    { id: 'accessories', name: 'accessories' }
  ]}
  customStyleContainer={{
    display: 'flex',
    justifyContent: 'flex-start'
  }} // Optional.[Object].Default: {}.
  customStyleOptionListItem={{ marginRight: '20px' }} // Optional.[Object].Default: {}.
  onChange={(job, e) =>{
    this.setState({ type });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none.
  validationOption={{
    name: 'type', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your .
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>;

<Textbox
  attributesInput={{ // Optional.
    id: 'Brand',
    name: 'Brand',
    type: 'text',
    placeholder: 'Place brand here',
  }}
  value={name} // Optional.[String].Default: "".
  onChange={(brand, e) => {
    this.setState({ brand });
    console.log(e);
  }} // Required.[Func].Default: () => {}. Will return the value.
  onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  validationOption={{
    name: 'Brand', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>;

<Select
  attributesInput={{ // Optional.
    id: 'sie',
    name: 'size',
  }}
  value={size} // Optional.[String].Default: "".
  optionList={[
    { id: '', name: 'Please Select a size },
    { id: 'SM', name: 'Small' },
    { id: 'MD', name: 'Medium' },
    { id: 'LG', name: 'Large' },
    { id: 'XL', name: 'XLarge' },
    { id: 'XXL', name: 'XXLarge' }
  ]} // Required.[Array of Object(s)].Default: [].
  onChange={(res, e) => {
    this.setState({ size: res.id });
    console.log(e);
  }} // Optional.[Func].Default: () => {}. Will return the value.
  onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
  customStyleOptionListContainer={{ maxHeight: '200px', overflow: 'auto', fontSize: '14px' }} // Optional.[Object].Default: {}.
  validationOption={{
    name: 'country', // Optional.[String].Default: "". To display in the Error message. i.e Please select a .
    check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
    required: true // Optional.[Bool].Default: true. To determin if it is a required field.
  }}
/>

// const App = props => {
//   return(
//     <div>
//     <Hello name="Nikki" />
//     <Hello name="Michael" />
//     <Hello name="Andrew" />
//   </div>
// );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
