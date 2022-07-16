import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table ,NavDropdown} from 'react-bootstrap'
import axios from 'axios'
import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";

export const Utilisateur = () => {
    var ipadresse="localhost"
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [password, setpassword] = useState("")
    const [address, setaddress] = useState("")
    const [Role, setRole] = useState("")
    const [NomUtil, setNomUtil] = useState("")
    const [btEN, setbtEN] = useState(true)
    const [téléphone, settéléphone] = useState("")
    const [adresse, setadresse] = useState("")
    const [username, setusername] = useState("")
    const [mat_fisc, setMat_fisc] = useState("")

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = `http://localhost:5000/getUtilisateurs`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)

                    console.log(result)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = `http://localhost:5000/Ajout_Utilisateur`
        axios.post(url,{
            fullName:fullName,
            username:username,
            password:password

        })
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleEdit = () =>{
        const url = `http://${ipadresse}:5001/modify_contact/${id}`
        const Credentials = { fullName, email, phoneNumber, address }
        axios.put(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `http://${ipadresse}:5001/delete_user/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
    }, [])
    return (
        <div>
            <div>
            <p style={{color:'#048a93',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman"}}>Liste Utilisateurs</p>
            <hr></hr>
                <div>
                    <Button  style={{marginLeft:"390px",marginTop:"10px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                       <b> Nouveau </b>
                    </Button>
                    <Button style={{marginLeft:'200px',width:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant='secondary' onClick={() => {window.location.reload()}}>
                    <b >Actualiser</b>
                    </Button>
                    <hr></hr>
                </div>
            </div>
            <div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <td style={{color:'#048a93'}}>
                                <NavDropdown
    title={<span style={{color:'#048a93'}}>Nom et Prénom</span>
    }
    id="nav-dropdown"
>
    <NavDropdown.Item>Filter</NavDropdown.Item>
    <NavDropdown.Item>Filter</NavDropdown.Item>
</NavDropdown></td>
           
                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Nom utilisateur</span>
    }
    id="nav-dropdown"
>
    <NavDropdown.Item>Filter</NavDropdown.Item>
    <NavDropdown.Item>Filter</NavDropdown.Item>
</NavDropdown></td>
                                <td style={{color:'#048a93'}}>Mot de Passe</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td><h6  style={{cursor:"pointer",hover:"text-decoration: underline",color:'#048a93'}} onClick={()=> {handleEditShow(SetRowData(item),setId(item._id),+setbtEN(true))}}>{item.Nom_prenom}</h6></td>
                                    
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    
                                   
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title><span style={{color:"#048a93"}}>Nouveau Fournisseur</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        
                        <Table>
                        <b>Information générale</b>
 
                            <tr>
                            <td> 
                                <label>Nom et Prénom</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)}  />
                            </td>
                            </tr><br></br>
                               <b> Compte </b>
                               <br></br>
                                <tr>

                                <td> 
                                <label>Nom utilisateur</label>
                                <input type="text" className='form-control' onChange={(e) => setusername(e.target.value)}  />
                                </td>
                                <td> 
                                <label>password</label>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)}  />
                            </td>
                            </tr>
                            
                            </Table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type='submit' style={{backgroundColor:"#048a93",borderBlockColor:"#048a93",marginTop:"27px"}} onClick={handleSubmite}>Ajouter</Button>
                        <Button variant='secondary' onClick={hanldePostClose}style={{marginTop:"25px"}}>Annuler</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title><span style={{color:"#048a93"}}>Fournisseur</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        
                        <Table>
                        <b>Information générale</b>
                            <tr>
                            <td> 
                                <label>Nom</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)+setbtEN(false)} placeholder="Please enter Name" defaultValue={RowData.Nom_prenom}/>
                            </td>
                          
                                </tr><br></br>
                                <b> Compte </b>
                                <br></br><tr>
                               
                                <td> 
                                <label>Nom utilisateur</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)+setbtEN(false)} placeholder="Please enter Address" defaultValue={RowData.username}/>
                                </td>
                                <td> 
                                <label>Password</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)+setbtEN(false)} placeholder="Please enter Address" defaultValue={RowData.password}/>
                            </td>
                            </tr>
 
                            </Table>
                            <Button type='submit'  style={{marginLeft:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}}disabled={btEN}onClick={handleEdit}>Modifier</Button>
                            <Button type='submit'  style={{marginLeft:"320px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} onClick={handleDelete}>Supprimer</Button>

                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}; 

