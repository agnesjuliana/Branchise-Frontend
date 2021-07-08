
import {Switch, Route} from 'react-router-dom';

// page import
import Login from './pages/Login'
import RegistrasiCustomer from './pages/RegisterCustomer'
import RegistrasiFounder from './pages/RegisterFounder'
import AkunSaya from './pages/AkunSaya'
import Beranda from './pages/Beranda'
import Central from './pages/Central'
import Franchise from './pages/Franchise'
import Laporan from './pages/Laporan'
import LandingPage from '../src/pages/LandingPage'
import Transaksi from '../src/pages/Transaksi'
import Profile from '../src/pages/Profile'
import Mou from '../src/pages/Mou'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register/customer" component={RegistrasiCustomer}/>
        <Route path="/register/founder" component={RegistrasiFounder}/>
        <Route path="/akunsaya" component={AkunSaya}/>
        <Route path="/beranda" component={Beranda}/>
        <Route path="/central" component={Central}/>
        <Route path="/franchise" component={Franchise}/>
        <Route path="/laporan" component={Laporan}/>
        <Route path="/transaksi" component={Transaksi}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/mou" component={Mou}/>
      </Switch>
    </div>
  );
}

export default App;
