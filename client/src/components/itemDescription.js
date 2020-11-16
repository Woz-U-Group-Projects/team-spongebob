import React from 'react';
import { Radiobox, Textbox, Select } from 'react-inputs-validation';


const itemDescription = () => {
    return (
   
<Radiobox

attributesInput={{ // Optional.

  id: 'type',

  name: 'type',

}}

value={type} // Optional.[String].Default: "".

optionList={[

  { id: 'shirt', name: 'shirt' },

  { id: 'pants', name: 'pants' },

  { id: 'shoes', name: 'shoes' },

  { id: 'skirt', name: 'skirt' },

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
    );
};

export default itemDescription








// ReactDOM.render(

// <App />, 

// document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
