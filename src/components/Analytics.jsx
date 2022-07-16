import React ,{useState,useEffect}from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { FaFileInvoice } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
import axios from "axios";
import {FcManager} from "react-icons/fc"
import Sidebar from "../pages/sidebar";
export default function Analytics() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const current = new Date().toLocaleDateString("fr-FR",options)
    //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
  const [Data, setData] = useState([]);
  const [FactNL, setFactNL] = useState(0);
  const [FactENC, setFactENC] = useState(0);
  const [FactENR, setFactENR] = useState(0);

  const [Total, setTotal] = useState(0);
var tt=0
var fn=0
var fc=0
var fr=0

  const GetFactures = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getFactures`
    axios.get(url)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log("Data",response.data)
               for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                  if(element.Etat==='Non Lue')
                  {fn=fn+1}
                  if(element.Etat==='En cours de traitement')
                  {fc=fc+1 } 
                  var dta=new Date(element.DateAjout)
                  var cdt=new Date(current)
                  if((cdt.getTime()-dta.getTime())/(1000*3600*24)>=15){
                   fr=fr+1
                   console.log(dta)
                  }
               }
               setFactENR(fr)
               setFactENC(fc)
               setFactNL(fn)
        })
        .catch(err => {
            console.log(err)
        })
}
const GetPaiments = () => {
  //here we will get all employee data
  const url = `http://localhost:5000/getPaiement`
  axios.get(url)
      .then(response => {
          const result = response.data;
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            console.log("Element 5",element.Montan)
          tt=tt+parseFloat(element.Montant)
          console.log("tt",tt)
          }
          setTotal(tt)
      })
      .catch(err => {
          console.log(err)
      })
}


useEffect(() => {
  GetFactures();
  GetPaiments();
}, [])
  return (
    <div>
      <Section>
<b style={{color:'#048a93',marginBottom:"50px"}}>{current}</b>  <br></br><br></br><br></br>
<span style={{marginLeft:"300px"}}>Derniers détails à {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} {new Date().getHours()}:{new Date().getMinutes()}</span>
  <div class="row mb-3" style={{marginTop:"20px"}}>
      
    <div  >
    <Card 
style={{ width: '17rem',display:"flex",float:"left",marginLeft:"20px",variant:"Secondary" }}
className="gradient-border"

>

<Card.Header><b >Factures en cours de traitement</b></Card.Header> 
<Card.Body>
  <Card.Title> <b> </b></Card.Title>
  <Card.Title>
    <table>
      <tr>
 <td> <i class="fa fa-list fa-2x" ></i></td><td><b style={{marginLeft:"25px"}}>{FactENC} Factures</b></td></tr></table>
  </Card.Title>
</Card.Body>
</Card>
</div>
<div  >

<Card
style={{ width: '16rem',display:"flex",float:"left",marginLeft:"15px",variant:"Secondary" }}
className="gradient-border"

>

<Card.Header><b >Factures Non Lues</b></Card.Header> 
<Card.Body>
  <Card.Title> <b> </b></Card.Title>
  <Card.Title>
    <table>
      <tr>
 <td> <i class="fa fa-list fa-2x" ></i></td><td><b style={{marginLeft:"25px"}}>{FactNL} Factures</b></td></tr></table>
  </Card.Title>
</Card.Body>
</Card>           </div>

    
<div  >
      
<Card
style={{ width: '16rem',display:"flex",float:"left",marginLeft:"15px",variant:"Secondary" }}
className="gradient-border"

>

<Card.Header><b>Factures en Retard</b></Card.Header> 
<Card.Body>
  <Card.Title> <b> </b></Card.Title>
  <Card.Title>
    <table>
      <tr>
 <td> <i class="fa fa-list fa-2x" ></i></td><td><b style={{marginLeft:"25px"}}>{fr} Factures</b></td></tr></table>
  </Card.Title>
</Card.Body>
</Card>           </div>

<div  >
        
            
<Card
style={{ width: '16rem',display:"flex",float:"left",marginLeft:"15px",variant:"Secondary" }}
className="gradient-border"

>

<Card.Header><b >Paiement Total</b></Card.Header> 
<Card.Body>
  <Card.Title> <b> </b></Card.Title>
  <Card.Title>
    <table>
      <tr>
 <td> <i class="fa fa-money fa-2x" ></i></td><td><b style={{marginLeft:"25px"}}>{Total} TND</b></td></tr></table>
  </Card.Title>
</Card.Body>
</Card>
</div>

           </div>
           <a href='Facture_fr'>Click here for supplier backoffice ...</a>  
           </Section>
    </div>
  );
}
const Section = styled.section`
 
  .gradient-border {
    --border-width: 3.5px;
  
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 200px;
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    color: white;
    background: #048a93;
    border-radius: var(--border-width);
  
    &::after {
      position: absolute;
      content: "";
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      z-index: -1;
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      background: linear-gradient(
        150deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: moveGradient 4s alternate infinite;
    }
  }
  
  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;
