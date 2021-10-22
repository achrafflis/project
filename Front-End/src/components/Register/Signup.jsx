import React ,{Component } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './SignInStyle.css';

class Signup extends Component {

    constructor () {
     
        super()

        this.state = {
           nom :'',
           prenom :'',
           password :'',
           email :'',
           age :'',
           region:'',
           adresse:''


        }
        this.changeNom=this.changeNom.bind(this)
        this.changePrenom=this.changePrenom.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeAge=this.changeAge.bind(this)
        this.changeRegion=this.changeRegion.bind(this)
        this.changeAdresse=this.changeAdresse.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }
    changeNom(event){
     this.setState({
          nom:event.target.value
     })

    }
    changePrenom(event){
     this.setState({
          prenom:event.target.value
     })

    }
    changePassword(event){
     this.setState({
          password:event.target.value
     })

    }
   
    changeEmail(event){
     this.setState({
          email:event.target.value
     })

    }
    
    changeAge(event){
     this.setState({
          age:event.target.value
     })

    }
    changeRegion(event){
     this.setState({
          region:event.target.value
     })

    }
    changeAdresse(event){
     this.setState({
          adresse:event.target.value
     })

    }
       onSubmit(event){
          event.preventDefault()
         const registred ={
              nom: this.state.nom,
              prenom:this.state.prenom,
              password:this.state.password,
              email :this.state.email,
              age:this.state.age,
              region:this.state.region,
              adresse:this.state.adresse
         }
         axios.post('http://localhost:4000/app/signup',registred)
         .then(response=>console.log(response.data))
         this.setState({ 
          nom :'',
          prenom :'',
          password :'',
          email:'',
          age :'',
          region:'',
          adresse:''
         })
       }
    render () {

    return (

        
     <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
     <div className="container">
       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              
                     <form >
                      <div className="form-group">
                       <input type='text'
                       placeholder='Nom '
                       className="form-control"
                       onChange={this.changeNom}
                       value={this.state.nom}
                       className ='form-control form-group'
                       />
                       </div>
                       <div className="form-group">

                        <input type='text'
                       placeholder='Prenom'
                       className="form-control"
                       onChange={this.changePrenom}
                       value={this.state.prenom}
                       className ='form-control form-group'
                       />
                       </div>
                       <div className="form-group">

                         <input type='password'
                       placeholder='Password '
                       className="form-control"
                       onChange={this.changePassword}
                       value={this.state.password}
                       className ='form-control form-group'
                       /> 
                       </div>
                       <div className="form-group">

                       <input type='text'
                       placeholder='Email'
                       className="form-control"
                       onChange={this.changeEmail}
                       value={this.state.email}
                       className ='form-control form-group'
                       /> 
                       </div>
                       <div className="form-group">

                       <input type="number"
                       placeholder='Age'
                       className="form-control"
                       onChange={this.changeAge}
                       value={this.state.age}
                       className ='form-control form-group'
                       />
                       </div>
                       <div className="form-group">

                       <select className="form-control" value={this.state.region} onChange={this.changeRegion} 
                         className ='form-control form-group' >
                        <option value="Sfax">Sfax</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Bizert">Bizert</option>
                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                       </select>

                       </div>
                       <div className="form-group">

                        <input type='text'
                       placeholder='Adresse '
                       className="form-control"
                       onChange={this.changeAdresse}
                       value={this.state.adresse}
                       className ='form-control form-group'
                       />
                       </div>
                       <button type="submit" 
                       className="btn btn-primary btn-block"
                       onClick={this.onSubmit}
                       >Sign Up</button>
                       <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                    </p>

                     </form>


                     </div>
    </div>
      </nav>
      </div>
              


            )

             }



}
 export default Signup