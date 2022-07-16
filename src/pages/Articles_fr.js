import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table,Dropdown,DropdownButton,ButtonGroup,NavDropdown} from 'react-bootstrap'
import axios from 'axios'
import styled from "styled-components";
import Navbar_fr from './navbar_fr';
import TextArea from 'antd/lib/input/TextArea';

export const Article_fr = () => {
    var ipadress='localhost'
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [NomArticle, setnomArticle] = useState("")
    const [Prix, setPrix] = useState("")
    const [MontTHT, setMontTHT] = useState("")
    const [Référence, setRéférence] = useState("")
    const [RemiseHT, setRemiseHT] = useState("")
    const [MontDV, setMontDV] = useState("")
    const [TotNetHT, setTotNetHT] = useState("")
    const [Description, setDescription] = useState("")
    const [Rest, setRest] = useState("")
    const [NumFact, setNumFact] = useState(0)
    const [Photo, setPhoto] = useState("");

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
    const [ViewPostArticle, SetPostShowArticle] = useState(false)
    const handlePostShowArticle = () => { SetPostShowArticle(true) }
    const hanldePostCloseArticle = () => { SetPostShowArticle(false) }
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
        const url = `http://localhost:5000/Articles`
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
    
    const Ajout_Article = () => {
        const url = `http://localhost:5000/Ajout_Article`
        axios.post(url,{
            NomArticle:NomArticle,
            Description:Description,
            Prix:Prix,
            Référence:Référence,
            Photo:Photo,
            Fournisseur:localStorage.getItem('Nom'),
            IDFR:localStorage.getItem('IDFR'),
            date:date
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
       /************************************************************************************************** */
       const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0])
        setPhoto(e.target.files[0].name);
        console.log(file)
        console.log(Photo)
      };
 
      const uploadFile =async() => {
        const formDataART = new FormData();
        formDataART.append("article", file);
        formDataART.append("fileName", fileName);
        await axios.post(
            "http://localhost:5000/upload_Article",
            formDataART
          );
         
       
      };
       /************************************************************************************************* */
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
       
        <div  >
            
           <Navbar_fr/> 
           <p style={{color:'#048a93',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman",marginTop:"45px"}}>Liste des Articles</p>
            <hr></hr>
            <div>
            <Button style={{marginLeft:'200px',width:"150px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => { handlePostShow()}}>
                    Ajouter Article 
                    </Button>
                    <Button style={{marginLeft:'200px',width:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => {window.location.reload()}}>
                    Actualiser 
                    </Button>
                    <span style={{marginLeft:"20px"}}>Dernière actualisation le {date}</span>
                   <hr></hr> 
                    </div>
           <div className="container main-content">
        {Data.map((item)=>
        
        <div className="row product" style={{ border: "2.5px solid #048a93",marginBottom:"20px",cursor:"pointer"}} onClick={() => { handlePostShowArticle(SetRowData(item))}}>
        <div className="col-md-2">
          <img src={`Uploads_Articles/${item.Photo}`} alt="Sample Image"height={"150px"} width={"170px"} />
        </div>
        <br></br>
        <div className="col-md-8 product-detail">
          <h4 style={{color:"#048a93"}}>{item.NomArticle}</h4>
          <p>{item.Description}</p> 
          <span>{item.Réf}</span>
        </div> 
        <div className="col-md-2 product-price">
         <span style={{color:"#048a93"}}>{item.Prix}</span>
        </div>
        <br></br>
      </div>
      
        )}
        
      </div>
      <br></br>
      <br></br>

      <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static" 
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> <span style={{color:"#048a93"}}>Nouvelle Article</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                    <Table >
                    <tr>
                            <td> 
                                <label>Nom Article</label>
                                <input type="text" className='form-control' onChange={(e) => setnomArticle(e.target.value)}  />
                            </td>
                            <td>
                            <label>Référence</label>
                                <input type="text" className='form-control' onChange={(e) => setRéférence(e.target.value)}  /></td>
                            </tr>
                            <tr>
                            <td > 
                                <label>Description</label>
                                <input type="email" className='form-control' onChange={(e) => setDescription(e.target.value)}  />
                            </td>
                            
                            <td><label>Prix</label>
                                <input type="text" className='form-control' onChange={(e) => setPrix(e.target.value)} /></td></tr>
                                <tr>
                                <td> 
                                <label>sélectionner la photo de l'article</label><br></br>
                                <input type="file" name="article" onChange={(e)=>saveFile(e)}/>
    <Button onClick={uploadFile()}></Button>                            </td></tr>
                    </Table>       
                    <br></br>
                               

			
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='success' onClick={Ajout_Article}> Valider</Button>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
           
            <div className='model-box-view'>
                <Modal
                    show={ViewPostArticle}
                    onHide={hanldePostCloseArticle}
                    backdrop="static" 
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> <span style={{color:"#048a93",marginLeft:"300px"}}><b>{RowData.NomArticle}</b></span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                       <div>
<Table>
    <tr>
                    <td rowSpan={4}>  <img src={`Uploads_Articles/${RowData.Photo}`} alt="Sample Image" width={"500px"} style={{border:'1px solid black'}} /></td> 
                    
                    <td style={{color:"#048a93"}}>Référence<br></br>{RowData.Réf}</td>
                    </tr>
                    <tr><td>Description<br></br>{RowData.Description}</td></tr>
                    <tr><td>Prix<br></br><span style={{marginLef:"200px"}}><b>{RowData.Prix}</b></span></td></tr>
                       </Table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostCloseArticle}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
           
            
      
                   </div>
        
    );

};

