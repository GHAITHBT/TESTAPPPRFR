import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table,Dropdown,DropdownButton,ButtonGroup,NavDropdown} from 'react-bootstrap'
import axios from 'axios'
import styled from "styled-components";
import Navbar_fr from './navbar_fr';import { ConsoleSqlOutlined } from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { FcAlphabeticalSortingZa } from "react-icons/fc";
import { FcFilledFilter } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
export const Facture_fr = () => {
    var ipadress='localhost'
    const current = new Date();
    const [startDate, setStartDate] = useState(new Date());

    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [fournisseur, setfournisseur] = useState("")
    const [DateFact, setDateFact] = useState("")
    const [DateAjout, setDateAjout] = useState("")

    const [Fichier, setFichier] = useState("")
    const [PrixUni, setPrixUni] = useState("")
    const [MontTHT, setMontTHT] = useState("")
    const [Quantité, setQuantité] = useState("")
    const [MontTTTC, setMontTTTC] = useState("")
    const [RemiseHT, setRemiseHT] = useState("")
    const [MontDV, setMontDV] = useState("")
    const [idfact, setidfact] = useState("")
    const [Description, setDescription] = useState("")
    const [Montant, setMontant] = useState("")
    const [NumFact, setNumFact] = useState("")

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [Etat, setEtat] = useState("");
    const [TypeFichier, setTypeFichier] = useState("");
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

	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
        let reader =new FileReader();
        console.warn("Selected file here",selectedFile)
	};
    var imageurl=`uploads/${RowData.image}`

	const Ajout_Facture = () => {
        const url = `http://localhost:5000/Ajout_Facture`
        axios.post(url,{
            NumFact:NumFact,
            startDate:startDate,
            date:date,
            Etat:"Non Lue",
            Fichier:Fichier,
            TypeFichier:TypeFichier,
            IDFR:localStorage.getItem('IDFR'),
            Fournisseur:localStorage.getItem('Nom')
        })
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err)
            })
            window.location.reload()

        }
     
    const handleFact = () => {
        if(Etat=="Non Lue"){
        const url = `http://localhost:5000/Update_etat/${id}`
        console.log(url)
        axios.post(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                
                    window.location.reload()
                
            })
            .catch(err => {
                console.log(err) 
            })
            hanldeViewClose()
            window.location.reload() }
            else{
            hanldeViewClose()
            window.location.reload()}
	};

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
    /************************************************************************************************************/
    const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0])
        setFichier(e.target.files[0].name);
        setTypeFichier(e.target.files[0].type)
        console.log(file)
        console.log(Fichier)
      };
 
 
      const uploadFile =async() => {
        const formData = new FormData();
        formData.append("avatar", file);
        formData.append("fileName", fileName);
        await axios.post(
            "http://localhost:5000/upload_Facture",
            formData
          );
         
       
      };
    /************************************************************************************************************/
    const FilterNumFact = () => {
        if(filter.length==0){
            GetEmployeeData()
        }
        else{
    setData(Data.filter(dt=>dt.numfact.includes(`${filter}`)))
       
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
  
    }
    
}
/************************************************************************************************************/
const FilterEtatNL = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getEtatNL/${localStorage.getItem('IDFR')}`
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
const FilterEtatENC = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getEtatENC/${localStorage.getItem('IDFR')}`
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
/************************************************Filter****************************************************/
const Filternumfactasc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getnumfactasc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filternumfactdesc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getnumfactdesc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filterdateajoutasc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getdtaasc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filterdateajoutdesc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getdtadesc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}

const Filteridasc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getidasc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filteriddesc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getiddesc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filterdatefactasc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getdtfasc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}
const Filterdatefactdesc = () => {
    //here we will get all employee data
    const url = `http://localhost:5000/getdtfdesc/${localStorage.getItem('IDFR')}`
    axios.get(url,)
        .then(response => {
            const result = response.data;
            setData(result)

                console.log(result)
            
        })
        .catch(err => {
            console.log(err)
        })
}

/********************************************************************************************************/

    const GetEmployeeData = () => {
        //here we will get all employee data
        const url = `http://localhost:5000/getFactureBYid/${localStorage.getItem('IDFR')}`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)

                    console.log(result)
                
            
            })
    }
    
    const PaiementAdd = () => {
        const url = `http://localhost:5000/add_Paiement`
        axios.post(url,{
            idfact:idfact,
            NumFact:NumFact,
            DateFact:DateFact,
            DateAjout:DateAjout,
            Montant:Montant,
        date:date})
        }
   
        const Calc_Total=()=>{
            for (let index = 0; index < Articles.length; index++) {
             const element = Articles[index];
            var Total=Total+parseInt(element[3])
             
            } 
            setMontTHT(Total)
         
         }
         function paiement() {
            var x = document.getElementById("Montant");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
   
    useEffect(() => {
        GetEmployeeData(); 
        console.log(localStorage.getItem('IDFR'))
    }, [])
    return (
       
        <div  >
            <Navbar_fr/>
            <hr></hr>
            <p style={{color:'#048a93',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",marginTop:"45px"}}>Liste des Factures</p>
            <hr></hr>
            <div>
 
            <Button style={{marginLeft:'200px',width:"150px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => { handlePostShow()}}>
                    Ajouter Facture 
                    </Button>
                    <Button style={{marginLeft:'200px',width:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => {window.location.reload()}}>
                    Actualiser 
                    </Button> 
                    <span style={{marginLeft:"20px"}}>Dernière actualisation le {date}</span>
                   <hr></hr> 
                    </div>
                <Section>
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
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filteridasc()}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filteriddesc()}}>
      <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                    <FcFilledFilter/> <input type="text" onChange={(e)=>{FilterNumFact(setFilter(e.target.value))}} placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td> 
                                <td ><NavDropdown
    title={<span style={{color:'#048a93'}}>Numéro de facture</span>
    }
    id="nav-dropdown"
>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filternumfactasc()}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filternumfactdesc()}}>
       <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" onChange={(e)=>{FilterNumFact(setFilter(e.target.value))}} placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown></td>

                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Date Facture</span>
    }
    id="nav-dropdown"
>
<NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filterdatefactasc()}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filterdatefactdesc()}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant 
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" onChange={(e)=>{FilterNumFact(setFilter(e.target.value))}} placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown> </td>
                              
                                <td style={{color:'#048a93'}}><NavDropdown
    title={<span style={{color:'#048a93'}}>Date d'ajout</span>
    }
    id="nav-dropdown"
>

    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filterdateajoutasc()}}>
                    <FcAlphabeticalSortingAz size={'1.4em'}/> Ascendant  
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {Filterdateajoutdesc()}}>
                     <FcAlphabeticalSortingZa size={'1.4em'}/>  Descendant
                    </Button></NavDropdown.Item>
                     <FcFilledFilter/> <input type="text" onChange={(e)=>{FilterNumFact(setFilter(e.target.value))}} placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"130px",marginLeft:"2px"}}/>
</NavDropdown>
</td>
 <td >
 <NavDropdown
    title={<span style={{color:'#048a93'}}>Etat</span>
    }
    id="nav-dropdown"
>

    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {FilterEtatNL()}}>
                  <FcHighPriority/>  Non Lue
                    </Button></NavDropdown.Item>
    <NavDropdown.Item><Button style={{backgroundColor:"transparent",border:"none",color:"black",fontSize:"13.5px"}} variant="secondary" onClick={() => {FilterEtatENC()}}>
                    En Cours de traitement 
                    </Button></NavDropdown.Item>
                    <FcFilledFilter/>
                    <input type="text" onChange={(e)=>{FilterNumFact(setFilter(e.target.value))}} placeholder="Recherche ..." style={{backgroundColor:"#F5F5F5",color:"black",width:"200px",marginLeft:"2px"}}/>
</NavDropdown></td>
                            </tr>
                        </thead> 
                        <tbody >
                            {Data.map((item) =>
                                <tr key={item._id} style={{overlay:"red"}}>
                                    
                                    <td style={{color:'#048a93',hover:{backgroundColor:"red"}}}><h6 style={{cursor:"pointer",hover:"text-decoration: underline"}} onClick={() => { handleViewShow(SetRowData(item),setEtat(item.Etat),setId(item.id),setidfact("f"+item.id),setDateFact(item.DateFact),setDateAjout(item.DateAjout),setNumFact(item.numfact)) }}>F{item.id}</h6></td>
                                    
                                    <td>{item.numfact}</td>
                                    <td>{item.DateFact}</td>

                                    <td>{item.DateAjout}</td>
                                    <td> {item.Etat}</td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
            </Section>
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
                              <b> Numéro de Facture </b></td>
                        <td>   <input type="text" className='form-control'  placeholder="N° " value={RowData.numfact} />
                       
                            </td>
                            </tr>
                            <tr>
                            <td> 
                                <b>Date Facture</b></td>
                          <td> <input type="text" className='form-control'  placeholder="Date"value={RowData.DateFact} />
                       
                           </td></tr></Table>
                           {HandleFile(RowData)}
<br></br><br></br>
                         
                            
                        </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='success' >Valider</Button>

                        <Button variant='secondary' onClick={hanldeViewClose} >Fermer</Button>
                    </Modal.Footer>
                </Modal>





                <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static" 
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> <span style={{color:"#048a93"}}>Nouvelle Facture</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                       <div>
                    <Table className='responsive'>
                        <tr><td>Numéro Facture</td><td><input type="text" className='form-control'onChange={(a) => setNumFact(a.target.value)}/></td></tr>
                        <tr><td>Date Facture</td><td> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
</td></tr>
                    
                    </Table> 
                    <span>sélectionner un fichier image/pdf de facture </span>      
                    <input type="file" name="avatar" onChange={(e)=>saveFile(e)}/>
    <button onClick={uploadFile()}></button><br></br>
                               

			
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='success' onClick={()=>Ajout_Facture()} > Valider</Button>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
           
            </div>
                </div>
        
    );

};
const Section = styled.section`
.table-striped > tbody > tr:hover {
        background-color: #bbedfa;
        Color:black;
        .transparentbar {
            background-repeat:no-repeat;
            cursor:pointer;
            outline:none;
            border:none;
            box-shadow:none; 
            background-image: none;
    
            background-color: transparent;
            background: transparent;
            border-color: transparent;
    
        }
        .select {
            border: 1px solid #fff;
            background-color: transparent;
        }
}`;
