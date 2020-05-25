import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Cart from './Component/Cart/Cart';
import Login from './Component/Login/Login';
import Mobile from './Component/Mobile/Mobile'
import Header from './Component/Header/Header';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

const mapStateToProps= state =>{
  console.log(state.Login.isLogin)
return {
      isLogin: state.Login.isLogin,
      username:state.Login.Username
  };
}


const mapDispatchToProps = dispatch => ({
  onLogout: () =>dispatch({ type: 'LOGOUT_SUCCESS'})
})

function App(props) {
  
  return (
    <div className="App">
       <BrowserRouter>  
       <Header
            appName="Mobile"
            currentUser={props.username}
            isLogin={props.isLogin}
             />
            <div className="container-fluid">
               
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route  path="/mobile/:id" component={Mobile}/>
            <Route path="/mobile" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route  path="/cart" component={Cart}/>
        </Switch>
        
        </div>
        </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
