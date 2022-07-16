import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom"

import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

export const Login = () => {
	const history = useHistory()
    const [UserRole, SetUserRole] = useState("")
    const [username, SetUsername] = useState("")
    const [password, Setpassword] = useState("")

    const [ViewEdit, SetEditShow] = useState(false)
    const handleLoginShow = () => { SetEditShow(true) }
    const handleLoginClose = () => { SetEditShow(false) }
    var DBFRUserName=""
    var DBFRPassword="" 
    var DBEMUserName=""
    var DBEMPassword="" 
    var Nom=''
    var IDFR=""
   
    const GetFournisseur = () => {
        const url = `http://localhost:5000/getFournisseur/${username}/${password}`
        axios.get(url)
            .then(response => {
                const result = response.data;
DBFRUserName=result[0].username
DBFRPassword=result[0].password
Nom =result[0].Nom_prenom
IDFR=result[0].id                
            
            })
    }
    const GetUtilisateur = () => {
        const url = `http://localhost:5000/getUtilisateur/${username}/${password}`
        axios.get(url)
            .then(response => {
                const result = response.data;
DBEMUserName=result[0].username
DBEMPassword=result[0].password
Nom =result[0].Nom_prenom
                
            
            })
    }
    const HandleLogin=(e)=>{
        if(UserRole=="Fournisseur"){
GetFournisseur()
if(DBFRUserName==username && DBFRPassword==password && DBFRUserName==username!="" && DBFRPassword!="")
       { history.push('/Facture_fr')
      }
    }
    if(UserRole=="employé"){
        GetUtilisateur()
        if(DBEMUserName==username && DBEMPassword==password && DBEMUserName==username!="" && DBEMPassword!="")
               { history.push('/Acceuil')
               }
            }
            localStorage.setItem('auth',true)
            localStorage.setItem('Nom',Nom)
            localStorage.setItem('IDFR',IDFR)
            console.log('called here')
        }
  
    useEffect(() => {
        handleLoginShow()
    }, [])
    return (
        <div>
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={handleLoginClose}
                    backdrop="static"
                    keyboard={false}
                    style={{ float: "center",top: "20%",}}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><span style={{color:'#048a93',marginLeft:"200px"}}>Login</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <span style={{color:'#048a93'}}>Nom utilisateur</span>
                        <input type="text" className='form-control' onChange={(e)=>SetUsername(e.target.value)}  />
                        <br></br>
                        <span style={{color:'#048a93'}}>Mot de Passe</span>
                        <input type="password" className='form-control'   onChange={(e)=>Setpassword(e.target.value)} /><br></br><br></br>
                        <input type="radio" name='user'value="employé" onChange={()=>SetUserRole('employé')} style={{marginLeft:"110px"}}/> <b>Employé</b>
                         <input type="radio" value="typepaiement"name='user'  style={{marginLeft:"20px"}}onChange={()=>SetUserRole('Fournisseur')}/> <b>Fournisseur</b>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  style={{marginRight:"200px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} onClick={HandleLogin}>Connecter</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

