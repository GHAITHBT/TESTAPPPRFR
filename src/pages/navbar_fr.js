import React from 'react'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import {FcManager,FcHome,FcList,FcShop} from "react-icons/fc"
import styled from "styled-components";

export const Navbar_fr = () => {
    return (
            <nav class="navbar fixed-top navbar-expand-md  mb-4"style={{backgroundImage: 'url("images/background3.jpg")'}}>
                <div class="flex-row d-flex">
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    <ul class="navbar-nav">
                    <Section>  <span class="animate-charcter" style={{marginRight:"50px",marginTop:"2px"}}><b>Portail Fournisseur</b></span></Section> 
                        <li class="nav-item">
                            <a class="nav-link" href="Facture_fr"style={{color:'black'}}>Factures</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Paiement_fr"style={{color:'black'}}>Paiement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Article_fr"style={{color:'black'}}>Articles</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                    <li class='nav-item' style={{marginRight:'70px',marginTop:"6px",fontSize:"18px"}}><FcManager/> {localStorage.getItem("Nom")}</li>

                        <li class="nav-item">

                            <a class="nav-link" href="/" style={{color:'black'}}> <RiLogoutCircleRLine/> Log Out</a>
                        </li>
                        
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar_fr 
const Section = styled.section`

        .animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #048a93 0%,
    #00FFFF 29%,
    black 67%,
    #ADD8E6 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent; 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 20px;
      font-family:'Titan One',cursive;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }

}`;