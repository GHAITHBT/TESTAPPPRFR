import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
//import Navbar from './components/Navbar';
import Navbar_fr from './components/Navbar_fr';
import { Facture } from './pages/Facture';
import styled from "styled-components";
import { Fournisseur } from './pages/Fournisseur';
import { Paiement } from './pages/paiement';
import {Login} from './pages/Login'
import {Facture_fr} from "./pages/Facture_fr"
import { Paiement_fr } from './pages/paiement_fr';
import {Article_fr}from "./pages/Articles_fr"
import {Articles}from "./pages/Articles"
import Navbar from './pages/navbar';
import Sidebar from './pages/sidebar';
import { FactureENC } from './pages/FactureENC';
import { FactureNL } from './pages/FactureNL';
import { Utilisateur } from './pages/utilisateur';
function App() {
  const test = false; 
const authentification=(auth)=>{


}
  return (
    <>
<Router>
              
              {
                
                <Section>
                  
            
                      <Switch>
                        
                      <Route path='/' exact component={Login} />
                      <Route path='/Article_fr' exact component={Article_fr} />
            
                      <Route path='/Facture_fr' component={Facture_fr} />
                      <Route path='/Paiement_fr' component={Paiement_fr} />
            <div className="grid">
                        <Navbar />
                        <hr></hr>
                      <Route path='/Acceuil' exact component={Dashboard} />
            
                    <Route path='/Fournisseur' component={Fournisseur} />
                    <Route path='/Facture' component={Facture} />
                    <Route path='/FactureNL' component={FactureNL} />
                    <Route path='/FactureENC' component={FactureENC} />
            
                    <Route path='/Paiement' component={Paiement} />
                    <Route path='/Articles' component={Articles} />
                    <Route path='/Utilisateur' component={Utilisateur} />
            
                    
                    </div>
                      </Switch>
                    </Section>
                    
            }
            
                
               
              </Router>
 


    </>
  );
}
const Section = styled.section`
  padding: 1rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 0.5rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 2000px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;


export default App;
