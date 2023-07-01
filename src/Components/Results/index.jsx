import './Results.scss';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMonkaiTheme from 'react-json-pretty/dist/monikai'


const Results = (props) => {
    return (
      <section>
        {
          props.loading ? <p>loading...</p> :
        <pre data-testid="results-pre">
          {props.data 
          ? <JSONPretty data={props.data} theme={JSONPrettyMonkaiTheme}></JSONPretty> 
          : null}
        </pre>
        }
      </section>
    );
}

export default Results;
