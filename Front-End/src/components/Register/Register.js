import React from "react"
import { useForm } from "react-hook-form"

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  return (

     
<form onSubmit={handleSubmit(onSubmit)}>

      <input name="nom"/>
      <input name="prenom"/>
      <input name="age"/>
      <input name="region"/>
      <input name="adresse"  />
      <button type="submit">S'inscrire</button>
    </form>
     
        )
};

export default Register;