function History(props){
  const { history, displayHistory } = props;

  return(
    <>
    <ul>
      {
        history.length ?
        history.map((record, idx) => {
          return <li key={`histor=${idx}`}>
            <button onClick={(() => displayHistory(idx))}>
              {record.method}: {record.url}
            </button>
          </li> 
        })
        : ''
      }
    </ul>
    </>
  )
}

export default History