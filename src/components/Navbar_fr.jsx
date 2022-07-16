import React from "react";
import styled from "styled-components";
export default function Navbar() {
  return (
    <Nav>
      <div className="links" style={{width: "100%", margin: "0",padding: "0",backgroundColor:"#F5F5F5",top: "0", left: "0"}}>
        <ul>
          <span style={{marginRight:"100px",color:"black",fontSize:"22px"}}> Portail Fournisseur |</span>
     
            <li
               
            >
              <a href="/Facture_fr">
                <span style={{fontFamily:"Helvetica Neue",fontSize:"18px"}}> Mes facture </span>
              </a>
            </li>
            <li
             
            >
              <a href="/Paiement_fr">
                <span style={{fontFamily:"Helvetica Neue",fontSize:"18px"}}> Mes paiement </span>
              </a>
            </li>

            <li>
            <a href="/Article_fr">
                <span style={{fontFamily:"Helvetica Neue",fontSize:"18px"}}> Articles </span>
              </a>
            </li>
            <li/>
            </ul>
            </div>
    </Nav>
  );
}
const Nav = styled.nav`
  color: white;
  
  .links {
    display: flex;
    ul {
      list-style-type: none;
      display: flex;
      li {
        padding: 0rem 0.5rem;
        border-radius: 0rem;
        &:hover {
          text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.5em;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          color: black;
        }
      }
      .active {
        text-decoration-line: underline;
  text-decoration-thickness: 2px;
        
        }
        
      }
    }
  }
}


`;
