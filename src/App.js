import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const loadingHtml = (<div><CircleLoader color="#36d7b7" />
  <p>Flying through interstellar space</p></div>)

  return (
    <div className="App">
      {
        loading ?
        loadingHtml
        :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
      </div>
  );
}

export default App;
