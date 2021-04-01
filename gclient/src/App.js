import {feathersApp} from './utils/feathersApp'
import './App.css';


const createDocument = () => {
  feathersApp.service('projects').create({
    text: "helloworld"
  })
}


function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={createDocument}>
          helloworld
        </button>
      </header>
    </div>
  );
}

export default App;
