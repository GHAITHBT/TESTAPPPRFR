import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table,Dropdown,DropdownButton,ButtonGroup,NavDropdown} from 'react-bootstrap'
import axios from 'axios'
import styled from "styled-components";
import Navbar_fr from '../components/Navbar_fr';
import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { FcFilledFilter } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
export const Paiement = () => {
    var ipadress='localhost'
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [Réference, setRéference] = useState("")
    const [PrixUni, setPrixUni] = useState("")
    const [MontTHT, setMontTHT] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [MontTTTC, setMontTTTC] = useState("")
    const [RemiseHT, setRemiseHT] = useState("")
    const [MontDV, setMontDV] = useState("")
    const [TotNetHT, setTotNetHT] = useState("")
    const [Description, setDescription] = useState("")
    const [Rest, setRest] = useState("")
    const [NumFact, setNumFact] = useState(0)

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Adresse, setAdresse] = useState("");
    const [Téléphone, setTéléphone] = useState(0);
    const [TotalTVA, setTotalTVA] = useState([]);
    const [NomCL, setNomCL] = useState();
    const [CDPostVille, setCDPostVille] = useState();
    const [Articles, setArticles] = useState([]);
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewPostBL, SetPostShowBL] = useState(false)
    const handlePostShowBL = () => { SetPostShowBL(true) }
    const hanldePostCloseBL = () => { SetPostShowBL(false) }
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
    const [filter, setFilter] = useState("");
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");
    /************************************************************************************************************/
    /************************************************************************************************************/
    const FilterNumCom = () => {
        if(filter.length==0){
            GetEmployeeData()
        }
        else{
    setData(Data.filter(dt=>dt.NumCom.includes(`${filter}`)))
        console.log("data after filter",Data.NumCom)
        console.log("filter",filter)
        }
        
    }
/************************************************************************************************************/
/********************************************************************************************************/
const FilterDate = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.date.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/
const FilterEtat = () => {
    if(filter.length==0){
        GetEmployeeData()
    }
    else{
setData(Data.filter(dt=>dt.Etat.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/

const GetEmployeeData = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getPaiement`
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
const HandleFile =(RowData)=>{
    if (RowData.TypeFichier=="application/pdf"){
        return(
<div style={{marginLeft:"100px"}}>
                       <object data={`Uploads_Factures/${RowData.Fichier}`} type="application/pdf" width="600px" height="880px" >
  <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
</object>  
</div>)

    }
    else{
        return (                      
        <div>     <img style={{marginLeft:"135px",height:'600px',width:"480px"}} src={`Uploads_Factures/${RowData.Fichier}`}/></div>
        )
    }

}
    const FactADD = () => {
        const url = `http://${ipadress}:5001/Ajout_Facture`
        const Credentials = {NumFact,date,NomCL,Adresse, CDPostVille,Téléphone,email,MontTHT,TotalTVA,RemiseHT,MontTTTC,MontDV,Rest,TotNetHT,Articles}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
        }
   
        const Calc_Total=()=>{
            for (let index = 0; index < Articles.length; index++) {
             const element = Articles[index];
            var Total=Total+parseInt(element[3])
              console.log("Total",Total)
            } 
            setMontTHT(Total)
         
         }
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetEmployeeData();
        setNumFact( Math.floor(Math.random() * 9999999).toString())
    }, [])
    return (
        <div >
            <p style={{color:'#048a93',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman"}}>Liste des Paiements</p>
            <hr></hr>
            <div>
                    <Button style={{marginLeft:'200px',width:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => {window.location.reload()}}>
                    Actualiser 
                    </Button>
                    <span style={{marginLeft:"20px"}}>Dernière actualisation le {date}</span>
                   <hr></hr> 
                    </div>
                
            <div style={{marginTop:"30px"}}>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                            <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Facture</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>
                                <td ><NavDropdown
    title={<span style={{color:'#048a93'}}>Numéro de facture</span>
    }
    id="nav-dropdown"
>
   
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>
                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Date Facture</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown> </td>
                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Date d'ajout</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>
                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Date paiement</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>
<td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Montant</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td><td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Fournisseur</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutasc()"}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {"Filterdateajoutdesc()"}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>

                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    
                                    <td style={{color:'#048a93'}}><h6 style={{cursor:"pointer",hover:"text-decoration: underline"}} onClick={() => { handleViewShow(SetRowData(item)) }}>{item.id}</h6></td>
                                    <td>{item.numfact}</td>
                                    <td>{item.DateFact}</td>
                                    <td>{item.DateAjout}</td>
                                    <td>{item.DatePaiement}</td>
                                    <td>{item.Montant}</td>
                                    <td>Fournisseur</td>

                                   
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Facture
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                       
                                
                       <tr>
                           <td> 
                              <b> Numéro de Facture </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.numfact} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date Facture</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.DateFact}readOnly />
                       
                            </td>
                            </tr>
                            <tr>
                           <td> 
                              <b> Date d'ajout </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.DateAjout} readOnly/>
                       
                            </td>
                            <td> 
                                <b>Date paiement</b>
                           <input type="text" className='form-control'  placeholder="Date"value={RowData.DatePaiement}readOnly />
                       
                            </td>
                            </tr>
                            <tr>
                           <td> 
                              <b> Montant </b>
                           <input type="text" className='form-control'  placeholder="N° " value={RowData.Montant} readOnly/>
                       
                            </td>
                            <td> 
                              <b> Fournisseur </b>
                           <input type="text" className='form-control'  placeholder="Fournisseur " value={RowData.Fichier} readOnly/>
                       
                            </td>
                           
                            </tr>
                           </Table>
                        {HandleFile(RowData)}
                                                </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" />
                            </div>
                           
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter password" />
                            </div>
                            <div className='form-group mt-3'>
                            <b> Rôle</b> : <br></br>
                                <input type="radio" value="Admin"  style={{marginLeft:"150px"}} onChange={(e) => setRole(e.target.value)}/><b>Admin</b> 
                                <input type="radio" value="Admin"  style={{marginLeft:"20px"}} onChange={(e) => setRole(e.target.value)}/><b>Employé</b>

                            </div>
                            
                            <Button type='submit' className='btn btn-success mt-4' >Add Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
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
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setfullName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData._id}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.date} readOnly/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Number</label>
                                <input type="text" className='form-control' onChange={(e) => setphoneNumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.phoneNumber}/>
                            </div>
                           
                            <div className='form-group mt-3'>
                                <label>Address</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                                <div>
                                <label>password</label>
                                <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.password}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4'>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='model-box-view'>
                <Modal
                    show={ViewPostBL}
                    onHide={hanldePostCloseBL}
                    backdrop="static"
                    keyboard={false}
                  //  fullscreen={true}     
                    size={"lg"}                  >
                    <Modal.Header closeButton>
                        <Modal.Title>Facture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Table>
                                <tr><th>Client</th></tr>
                                <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setNomCL(a.target.value)} placeholder="Nom" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setAdresse(a.target.value)} placeholder="Adresse" /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setCDPostVille(a.target.value)} placeholder="Code Pstal et Ville" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setTéléphone(a.target.value)} placeholder="Numéro téléphone" /></td>
                              </tr> 
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setemail(a.target.value)} placeholder="Email" /></td>
                               
                              </tr> 
                                
                            </Table>
                        
                                <Table>
                                <tr><th>Article</th></tr>
                                <tr>
                                
                                <td> <input type="text" className='form-control' onChange={(a) => setDescription(a.target.value)} placeholder="Description" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setQuantité(a.target.value)} placeholder="
                                Quantité" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setPrixUni(a.target.value)} placeholder="Prix unitaire" /></td>
                               
                                
                                
                                </tr>
                                <tr>
                                <td colSpan={4} align='right'> <Button id='aj' size='sm' variant='dark' onClick={()=> {Articles.push([Description,PrixUni,Quantité,parseFloat(PrixUni)*parseInt(Quantité)])}}>Ajouter</Button></td>
                                {console.log('testing articles',Articles)}
                                
                                
                                </tr>
                            </Table>
                            <table className='table table-striped table-hover table-bordered'>
                            <thead>
                            <tr>
                                
                                <th >Description</th>
                                <th>Quantité </th>
                                <th>Prix unitaire</th>
                                <th>Total</th>
                                
                            </tr>
                        </thead>
                                <tbody>
                           
                        </tbody>
                             
                        </table>
                        <Table>
                                
                                <tr>
                                <td> <input type="text" className='form-control' value={MontTHT} placeholder="Montant Total HT" /></td>
                                <td> <input type="text" className='form-control' onChange={(a) => setMontTTTC(a.target.value)} placeholder="Montant Total TTC" /></td>
                              </tr> 
                              
                              <tr>
                                <td> <input type="text" className='form-control' onChange={(a) => setTotNetHT(a.target.value)} placeholder="Total Net HT" /></td>
                                <td> <input type="text" className='form-control' value={"19%"} placeholder="Total TVA" /></td>
                               
                              </tr> 
                                
                            </Table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className='btn btn-success mt-4' onClick={FactADD}> Valider</Button>

                        <Button variant='warning' onClick={hanldePostCloseBL}style={{marginTop:"25px"}}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        </div>
        
    );

};

