import LandingPage from '../src/pages/LandingPage'
import NavBar from './components/NavBar';
import Utama from './pages/Utama';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/Login'
import Registrasi from './pages/Register'

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/register" component={Registrasi}/>
    </Switch>
    </div>
  );
}

export default App;
