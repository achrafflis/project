import React ,{Component } from 'react'
import 'whatwg-fetch';
import axios from 'axios'

   
class AddAnimal extends Component {

    constructor () {
     
        super()

        this.state = {
            id_agri :'',
            numero :'',
            type :'',
            race :'',
            sexe :'',
            age:''
        
        }
        this.changeId_agri=this.changeId_agri.bind(this)
        this.changeNumero=this.changeNumero.bind(this)
        this.changeType=this.changeType.bind(this)
        this.changeRace = this.changeRace.bind(this)
        this.changeAge=this.changeAge.bind(this)
        this.changeSexe=this.changeSexe.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }

    changeId_agri(event){
        this.setState({
             id_agri:event.target.value
        })
   
       }
       changeNumero(event){
        this.setState({
             numero:event.target.value
        })
   
       }
       changeType(event){
        this.setState({
             type:event.target.value
        })
   
       }
      
       changeRace(event){
        this.setState({
             race:event.target.value
        })
   
       }
       
       changeAge(event){
        this.setState({
             age:event.target.value
        })
   
       }
       changeSexe(event){
        this.setState({
             sexe:event.target.value
        })
   
       }
       
       onSubmit(event){
        event.preventDefault()
       const animal ={
            id_agri: this.state.id_agri,
            numero:this.state.numero,
            type:this.state.type,
            race :this.state.race,
            age:this.state.age,
            sexe:this.state.sexe
       }
       console.log('cccc')
       console.log(animal)
       axios.post('http://localhost:4000/app/addanimal',animal)
       .then(response=>console.log(response.data))
       console.log('vvvvv')
       this.setState({ 
        id_agri :'',
        numero :'',
        type :'',
        race :'',
        sexe :'',
        age:''
       })
     }

     render () {

        return (
      
          <div>
         <div className="App">
         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
         <div className="container">
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  
                         <form >
                          <div className="form-group">
                           <input type='text'
                           placeholder='agriculteur '
                           className="form-control"
                           onChange={this.changeId_agri}
                           value={this.state.id_agri}
                           className ='form-control form-group'
                           />
                           </div>
                           <div className="form-group">
    
                            <input type='number'
                           placeholder='Numero'
                           className="form-control"
                           onChange={this.changeNumero}
                           value={this.state.numero}
                           className ='form-control form-group'
                           />
                           </div>
                           <div className="form-group">
    
                             <input type='text'
                           placeholder='Type '
                           className="form-control"
                           onChange={this.changeType}
                           value={this.state.type}
                           className ='form-control form-group'
                           /> 
                           </div>
                           <div className="form-group">
    
                           <input type='text'
                           placeholder='Race'
                           className="form-control"
                           onChange={this.changeRace}
                           value={this.state.race}
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
    
                           <input type='text'
                           placeholder='Sexe '
                           className="form-control"
                           onChange={this.changeSexe}
                           value={this.state.sexe}
                           className ='form-control form-group'
                           />
                           </div>
                           
                           <button type="submit" 
                           className="btn btn-primary btn-block"
                           onClick={this.onSubmit}
                           >Add Animal</button>
                          
    
                         </form>
    
    
                         </div>
        </div>
          </nav>
          </div>
          </div>  
      
                )
    
                 }
    

}
export default AddAnimal