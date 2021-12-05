import './Component/Home'
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

import { Route, Switch } from 'react-router';

import Login from './Component/Login';
import Form from './Component/form';
// import BooksList from './Component/BooksList';
import Addbooks from './Component/Addbooks';

import Application from './Application';
function App() {
  return (
    <>
    <h1>PROJECT IO</h1>
  
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/form" exact component={Form} />
      <Route path="/show" exact component={Application} />
      <Route path="/add" exact component={Addbooks} />
    </Switch>

    </>
  );
}

export default App;
