import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import Authenticated from "./components/Authenticated";
import isAuth from "./hoc/isAuth";

import AuthContext from "./contexts/AuthContext";

import { auth } from "./utils/firebase";

import "./App.css";

function App() {

  return (
      <AuthContext.Provider value={Authenticated()}>
    <div className="container">
      <Header  />

      <main className="site-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={isAuth(Dashboard)} />
          <Route path="/categories/:category" component={isAuth(Dashboard)} />
          <Route path="/pets/details/:petId" component={Details} />
          <Route path="/pets/create" component={isAuth(Create)} />
          <Route path="/pets/edit/:petId" component={isAuth(Edit)} />
          <Route path="/users/login" component={Login}></Route>
          <Route path="/users/register" component={Register}></Route>
          <Route
            path="/users/logout"
            render={(props) => {
              try {
                auth.signOut();
                props.history.push('/');
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </Switch>
      </main>

      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
