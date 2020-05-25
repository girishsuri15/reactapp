import React from 'react';
import { connect } from 'react-redux';
import {LOGIN } from '../../redux/Action/LoginAction'
import {Redirect} from 'react-router-dom'
import ERROR from '../Error/Error'

const mapStateToProps= state =>{
  console.log(state.Login.isLogin)
return {
      Username: state.Login.Username,
      ISLogin: state.Login.isLogin,
      error:state.Login.error,
      
      
  };
}

const mapDispatchToProps = dispatch => ({
   onSubmit: (email, password) =>
     //dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
     dispatch(LOGIN(email,password))
    
  });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password:''};
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeEmail(event) {    
    this.setState({email: event.target.value});  
  }
  changePassword(event) {    
    this.setState({password: event.target.value});  
  }
  handleSubmit(event) {
   
    console.log(event);
    event.preventDefault();
    this.props.onSubmit(this.state.email,this.state.password)
    
     
  }
    render() {
     
      if (this.props.ISLogin===true) {
        return <Redirect to='/mobile' />
      }
      return (

        <div className="auth-page">
        <div className="container page">
        <ERROR msg="Username or Password in incorrect"
            IsError={this.props.error}/>
          <div className="row">


            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">LogIn</h1>
              <p className="text-xs-center"></p>
              <div>
               <form onSubmit={this.handleSubmit}>
       
               <fieldset className="form-group"> <input  className="form-control form-control-lg" type="email" placeholder="Email" value={this.state.email} onChange={this.changeEmail} />   </fieldset> 
               <fieldset className="form-group"><input className="form-control form-control-lg" type="password" placeholder="Password" onChange={this.changePassword} /></fieldset>        
              <input className="btn btn-lg btn-primary pull-xs-right" type="submit" value="Submit" />
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      ); 
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Login);
