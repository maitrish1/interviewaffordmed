import logo from './logo.svg';
import './App.css';
import Register from './Auth/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Switch>
          <Route path='/login' ><Login/></Route>
          <Route path='/register'><Register/></Route>
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
