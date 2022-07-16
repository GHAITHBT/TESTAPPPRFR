import React,{useState} from 'react'
import {FcManager,FcHome,FcList,FcShop} from "react-icons/fc"
import {GiClothes} from"react-icons/gi"
import {BsPeopleFill} from 'react-icons/bs'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import { Button, Modal, ModalTitle,Table ,NavDropdown} from 'react-bootstrap'
import {useHistory} from "react-router-dom"

const Sidebar = () => {
    const history = useHistory()
    const [Enteredpassword,setEnteredpassword]=useState('')
    const [password,setpassword]=useState("12345678")
    const handleUser=()=>{
        if (Enteredpassword==password){
            console.log(Enteredpassword)
            history.push('/Utilisateur')
        }
        else
        {alert("Mot de passe incorrect")}
    }
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas  pl-0" id="sidebar" role="navigation" style={{backgroundImage: 'url("images/background3.jpg")'}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-primary" href="#"><h5 style={{marginBottom:'50px',color:'black'}}><FcManager/> {localStorage.getItem("Nom")}</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-primary" href="Acceuil"><span className="ml-3"style={{color:'black'}}><FcHome/> Acceuil</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-primary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-4"style={{color:'black'}}><FcList/> Factures▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-primary" href="FactureNL"style={{color:'black'}}> Factures Non Lues </a></li>
                       <li class="nav-item mb-1 "><a class="nav-link text-primary" href="FactureENC"style={{color:'black'}}>  Factures En Cours De Traitement </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-primary" href="Paiement"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-4" style={{color:'black'}}><FcList/> Paiement</span></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-primary" href="Fournisseur"><span className="ml-3"style={{color:'black'}}><BsPeopleFill/> Fournisseur</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link " href="Articles"style={{color:'black'}}> <GiClothes/> Articles</a></li>
                <li class="nav-item mb-2"><span class="nav-link " href="Utilisateur"style={{marginBottom:'30px',color:'black',cursor:"pointer"}}onClick={handlePostShow}> <BsPeopleFill/> Utilisateur</span></li>
                <li class="nav-item mb-2"><a class="nav-link" style={{color:'black'}}> <RiLogoutCircleRLine/> Log out</a></li>

            </ul>
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                    
                >
                    <Modal.Header closeButton>
                    <Modal.Title><span style={{color:"#048a93"}}>Liste utilisateur</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Seuls les utilisateurs autorisés peuvent entrer<br></br>
                    Entrer le mot de passe
                        <input type="text" className='form-control' onChange={(e) => setEnteredpassword(e.target.value)}  />
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button  variant='success' onClick={()=>handleUser()} style={{marginTop:"27px"}} >Valider</Button>
                        <Button variant='secondary' onClick={hanldePostClose}style={{marginTop:"25px"}}>Annuler</Button>
                    </Modal.Footer>
                </Modal>
            </div>
       </div>
    )
}
 
export default Sidebar 