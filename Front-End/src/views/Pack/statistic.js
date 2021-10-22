import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Bar ,Line,Pie } from 'react-chartjs-2';


export default function Statistic () {
    const [chartData, setChartData] = useState([]);
   
    const chart = () => {
      let nomPack = [];
      let prixPack = [];
      axios.get('http://localhost:4000/app/listepack')
        .then(res => {
          console.log(res);
          console.log( res.data)

          for (const dataObj of res.data) {
            console.log(dataObj.nom)

            prixPack.push(parseInt(dataObj.prix));
            nomPack.push(dataObj.nom);

          }
          console.log(nomPack)

          setChartData({
            labels: nomPack,
            datasets: [
              {
                label: "Prix pack",
                data: prixPack,
                backgroundColor: ["rgba(157,157,157, 0.6)"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      };
      
        useEffect(() => {
          chart();
        }, []);
     console.log(chartData)
      return (
     <div >
      Statistic Pack 
     
     
      <Bar data={chartData} />
     </div>






      )

   
}
