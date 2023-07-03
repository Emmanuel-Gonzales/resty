import { useState } from 'react';

import './Form.scss';

const Form = (props) => {
  const[url, setUrl] = useState('')
  const [method, setMethod] = useState('')
  const [data, setData] = useState('')

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    props.handleApiCall(formData);
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e)=> setUrl(e.target.value) }/>
          <button  type="submit">GO!</button>
        </label>
        <label> json data(if needed)
          <textarea rows="4" cols="50 "
          onChange={(e) => {setData(e.target.value)}}
          />
        </label>
        <label className="methods">
          <span data-testid="get-button" id="get" onClick={(e) => setMethod('get')}>GET</span>
          <span data-testid="post-button" id="post" onClick={(e) => setMethod('post')}>POST</span>
          <span id="put" onClick={(e) => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={(e) => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
