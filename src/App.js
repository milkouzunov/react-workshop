import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Create from './components/Create';
import Edit from './components/Edit';



import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="site-content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/categories/:category" component={Dashboard}/>
          <Route path="/pets/details/:petId" component={Details}/>
          <Route path="/pets/create" component={Create}/>
          <Route path="/pets/edit/:petId" component={Edit}/>

        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
