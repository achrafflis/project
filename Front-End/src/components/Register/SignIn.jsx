import React ,{Component } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import 'whatwg-fetch';
import {setInStorage, getFromStorage,} from './storage'; 
import {  Redirect } from "react-router-dom";
import './SignInStyle.css';

class SignIn extends Component {

    constructor (props) {
       super (props);

       this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signInError: '',
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
      };
      this.logout = this.logout.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
        this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
   
      }
      
    onTextboxChangeSignInEmail(event) { 
      var test = "ACHRAF";

      console.log("Executing onChange email: ", test);
      this.setState({
        signInEmail: event.target.value,
      });
    }
    onTextboxChangeSignInPassword (event){
      this.setState({
        signInPassword: event.target.value,
      });

    }
    onTextboxChangeSignUpEmail  (event){
      this.setState({
        signUpEmail: event.target.value,
      });

    }
    onTextboxChangeSignUpPassword   (event){
      this.setState({
        signUpPassword: event.target.value,
      });
 
    }
    
   
    onSignIn() {
        // Grab state
        var test = "ACHRAF";
        window.alert("Executing onSignIn 2: ", test);
        console.log(" test 1");
 


        this.setState({
          isLoading: true,
          signInEmail: "achraf@gmail.com",
          },
          () => {
          window.alert("signInEmail 2 ", this.state.signInEmail);}
        );

        const  signInEmail = this.state.signInEmail;
        const  signInPassword = this.state.signInPassword;
  
        window.alert("signInPass ");

        console.log(signInEmail);
        console.log(signInPassword);

        // Post request to backend
        fetch('http://localhost:4000/app/api/account/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: signInEmail,
            password: signInPassword,
            
          }),
        }).then(res => res.json())
          .then(json => {
            window.alert('json: ', json);
            
            console.log('json: ', json);
      
            if (json.success) {
              this.setState({
                signInError: json.message,
                isLoading: false,
                signInPassword: '',
                signInEmail: '',
                token: json.token,
              });
            } else {
              this.setState({
                signInError: json.message,
                isLoading: false,
              });
            }
          });
      }



      logout() {
        this.setState({
          isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
              if (json.success) {
                this.setState({
                  token: '',
                  isLoading: false
                });
              } else {
                this.setState({
                  isLoading: false,
                });
              }
            });
        } else {
          this.setState({ 
            isLoading: false,
          });
        }
      }
     
      render() {
        const {
          isLoading,
          token,
          signInError,
          signInEmail,
          signInPassword,
          signUpEmail,
          signUpPassword,
          signUpError,
        } = this.state;
       
        if (!token) {
          return (
            <div>
              <div>
                {
                  (signInError) ? (
                    <p>{signInError}</p>
                  ) : (null)
                }
                
               
                <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
     <div className="container">
       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
      
                <p>Sign In</p>
               
     
                <div className="form-group">
            <label>Email address</label>
            <input type="email" 
            className="form-control" 
            placeholder="Enter email" 
            value={signInEmail}
             onChange={this.onTextboxChangeSignInEmail}/>
        </div>
                <br />
                <div className="form-group">
            <label>Password</label>
            <input type="password" 
            className="form-control"
             placeholder="Enter password" 
              value={signInPassword} 
              onChange={this.onTextboxChangeSignInPassword}/>
        </div>
                <br />
                <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button  className="btn btn-primary btn-block"
         onClick={this.onSignIn}>Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
       
       
                </div>
    </div>
      </nav>
      </div>
      
      </div>
      </div>
          );
        }
    
        return (
          <div>
            <Redirect to="/admin/dashboard" />
          </div>
        );
      }


}
 export default SignIn