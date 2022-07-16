import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";
import {useHistory} from "react-router-dom"
import { Button } from 'react-bootstrap'
import Sidebar from "../pages/sidebar";
import Navbar from "./Navbar";

export default function Dashboard() {
  const history = useHistory()

  return (
    <div >
    <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                   <div class="col main pt-5 mt-3">
         
     <Analytics/>
 
    </div> 
             </div>
        
      </div>

      </div>
    
    
  );
}

const Section = styled.section`
  padding: 1rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
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
