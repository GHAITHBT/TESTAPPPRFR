import React from 'react'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import {FcManager,FcHome,FcList,FcShop} from "react-icons/fc"
import styled from "styled-components";

export const Navbar = () => {
    return (
        
            <nav class="navbar fixed-top navbar-expand-md mb-4 animated" style={{backgroundImage: 'url("images/background3.jpg")'}}>

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

                        <li class="nav-item ">
                            <a class="nav-link" href="/Acceuil" style={{color:'black'}}>Acceuil <span class="sr-only">Acceuil</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Facture"style={{color:'black'}}>Factures</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Paiement"style={{color:'black'}}>Paiement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Fournisseur"style={{color:'black'}}>Fournisseur</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Articles"style={{color:'black'}}>Articles</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class='nav-item' style={{marginRight:'70px',marginTop:"6px",fontSize:"18px"}}><FcManager/> {localStorage.getItem("Nom")}</li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://localhost:3000" style={{color:'black'}}><RiLogoutCircleRLine/> Log Out</a>
                        </li>
                        
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar 
const Section = styled.section`

        .animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #048a93 0%,
    #00FFFF 29%,
    white 67%,
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
  animation: textclip 5s linear infinite;
  display: inline-block;
      font-size: 20px;
      font-family:'Titan One',cursive;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }

}
.animated{
    background: linear-gradient(+100deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 100s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 50% 0%;
    }
    50% {
        background-position: 50% 100%;
    }
    100% {
        background-position: 50% 0%;
    }
}
}`;