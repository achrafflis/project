import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px'
  },
 
  thead: {
      '& > *': {
          fontSize: 20,
          background: '#000000',
          color: '#FFFFFF'
      }
  },
  row: {
      '& > *': {
          fontSize: 18
      }
  }
})
export default function ListAnimal() {
    const [data, setData] = useState([]);
    const classes = useStyles();

    const [q, setQ] = useState('');
    const [searchColumns, setSearchColumns] = useState([
      'name',
      'birth_year',
    ]);
  
    useEffect(() => {
      axios.get('http://localhost:4000/app/listeanimal')
      .then((response) =>  response.data)
      .then((result) =>   
        setData(result)
           )
    }, []);
   

    function fRemove(id){

      axios.delete('http://localhost:4000/app/'+id)
      .then (rd =>{alert(rd.data)});
      
      window.location.reload();
      
      return 0;
      
      }
    return (
      <Table className={classes.table}>

      

      <TableHead>
          <TableRow className={classes.thead}>
              <TableCell>Numero</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Race</TableCell>
              <TableCell>sexe</TableCell>
              <TableCell>Age</TableCell>
              <TableCell></TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
          {data.map((animal) => (
              <TableRow className={classes.row} key={animal._id}>
                  <TableCell>{animal.numero}</TableCell> 
                  <TableCell>{animal.type}</TableCell>
                  <TableCell>{animal.race}</TableCell>
                  <TableCell>{animal.sexe}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} >Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={()=> fRemove(animal._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
              </TableRow>
          ))}
      </TableBody>
  </Table>
  );



}