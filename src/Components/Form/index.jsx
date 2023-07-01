import { useState } from 'react';

import './Form.scss';

const Form = (props) => {
  const[url, setUrl] = useState('')
  const [method, setMethod] = useState('')


  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e)=> setUrl(e.target.value) }/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('GET')}>GET</span>
          <span id="post" onClick={(e) => setMethod('POST')}>POST</span>
          <span id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={(e) => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
