import React ,{Component } from 'react'
import 'whatwg-fetch';
import axios from 'axios'

   
class AddPack extends Component {

    constructor () {
     
        super()

        this.state = {
            number :'',
            nom :'',
            image :'',
            prix :'',
            qt_pack :'',
            produits:''
        
        }
        this.changeNumber=this.changeNumber.bind(this)
        this.changeNom=this.changeNom.bind(this)
        this.changeImage=this.changeImage.bind(this)
        this.changePrix = this.changePrix.bind(this)
        this.changeQt_pack=this.changeQt_pack.bind(this)
        this.changeProduits=this.changeProduits.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

    }

    changeNumber(event){
        this.setState({
             number:event.target.value
        })
   
       }
       changeNom(event){
        this.setState({
             nom:event.target.value
        })
   
       }
       changeImage(event){
        this.setState({
             image:event.target.value
        })
   
       }
      
       changePrix(event){
        this.setState({
             prix:event.target.value
        })
   
       }
       
       changeQt_pack(event){
        this.setState({
             qt_pack:event.target.value
        })
   
       }
       changeProduits(event){
        this.setState({
             produits:event.target.value
        })
   
       }
       
       onSubmit(event){
        event.preventDefault()
       const pack ={
        number :this.state.number,
        nom :this.state.nom,
        image :this.state.image,
        prix :this.state.prix,
        qt_pack :this.state.qt_pack,
        produits :this.state.produits,
       }
       console.log('cccc')
       console.log(pack)
       axios.post('http://localhost:4000/app/addpack',pack)
       .then(response=>console.log(response.data))
       console.log('vvvvv')
       this.setState({ 
            number :'',
            nom :'',
            image :'',
            prix :'',
            qt_pack :'',
            produits:''
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
                           <input type='number'
                           placeholder='number'
                           className="form-control"
                           onChange={this.changeNumber}
                           value={this.state.number}
                           className ='form-control form-group'
                           />
                           </div>
                           <div className="form-group">
    
                            <input type='text'
                           placeholder='nom'
                           className="form-control"
                           onChange={this.changeNom}
                           value={this.state.nom}
                           className ='form-control form-group'
                           />
                           </div>
                           <div className="form-group">
    
                             <input type='text'
                           placeholder='image '
                           className="form-control"
                           onChange={this.changeImage}
                           value={this.state.image}
                           className ='form-control form-group'
                           /> 
                           </div>
                           <div className="form-group">
    
                           <input type='number'
                           placeholder='prix'
                           className="form-control"
                           onChange={this.changePrix}
                           value={this.state.prix}
                           className ='form-control form-group'
                           /> 
                           </div>
                           <div className="form-group">
    
                           <input type='number'
                           placeholder='qt_pack '
                           className="form-control"
                           onChange={this.changeQt_pack}
                           value={this.state.changeqt_pack}
                           className ='form-control form-group'
                           />
                           </div>
                           <div className="form-group">
    
                           <input type="text"
                           placeholder='produits'
                           className="form-control"
                           onChange={this.changeProduits}
                           value={this.state.produits}
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
export default AddPack