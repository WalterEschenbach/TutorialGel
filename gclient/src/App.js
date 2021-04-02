import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from './containers/signup/index'
import './App.css';





function App() {
 

  return (
	<div className="App">
	  <header className="App-header">
		<Router>
			<Switch>
				<Route exact path="/signup" component={Signup} displayName='Sign Up' />
			</Switch>
		</Router>
	  </header>
	</div>
  );
}

export default App;
