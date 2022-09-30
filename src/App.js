import './styles/App.css';
import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import StartMission from './components/StartMission';


function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
          setLoading(false)
        }, 5000)
    }, [])

  return (
    <div className="App">
      {
        loading ?<Loading />:
        <header className="App-header">
          <StartMission />
        </header>
        }
  
      </div>
  );
}

export default App;
