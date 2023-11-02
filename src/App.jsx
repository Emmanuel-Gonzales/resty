import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';

export const initialState = {
  loading: false,
  history: [],
  data: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...state, loading: action.payload};
      case 'SET-DATA':
        return {
          ...state,
          data: action.payload.results, 
          history: [...state.history, 
          {...action.payload.requestParams, 
          data: action.payload.results}]};  
    case 'HISTORY':
      return {...state, data: state.history[action.payload]};
    default:
      return state;
  }
}

function App () {
  // const [data, setData] = useState(null)
  const [requestParams, setRequestParams] = useState({})
  // const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  }

  useEffect(() => {
    try {
      const getData = async () => {
        if(requestParams.method && requestParams.url){
          dispatch({ type: 'LOADING', payload: true });
          console.log(requestParams)
          let response = await axios(requestParams);
          let results = response.data
          dispatch({ type: 'SET-DATA', payload: { results, requestParams} });
          dispatch({ type: 'LOADING', payload: false });
        }
      }
      getData();
    } catch (error) {
      dispatch({ type: 'SET-DATA', payload: 'no data avalible' });
    }
  },[requestParams])

  const displayHistory = (idx) => {
    const action = {
      type: 'HISTORY',
      payload: idx
    }
    dispatch(action);
  }

    return (
      <>
        <Header />
        <div data-testid="app-div-method">Request Method: {requestParams?.method?.toUpperCase()}</div>
        <div data-testid="app-div-url">URL: {requestParams.url}</div>
        <History history={state.history} displayHistory={displayHistory} />
        <Form handleApiCall={callApi}/>
        <Results data={state.data} loading={state.loading}/>
        <Footer />
      </>
    );
}

export default App;
