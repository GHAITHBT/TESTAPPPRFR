import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle,Table,Dropdown,DropdownButton,ButtonGroup,NavDropdown,Card} from 'react-bootstrap'
import axios from 'axios'
import styled from "styled-components";
import Navbar_fr from '../components/Navbar_fr';
import TextArea from 'antd/lib/input/TextArea';
import {FcManager} from "react-icons/fc"
import {FcViewDetails} from "react-icons/fc"


export const Articles = () => {
    var ipadress='localhost'
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
    const [ViewPostArticle, SetPostShowArticle] = useState(false)
    const handlePostShowArticle = () => { SetPostShowArticle(true) }
    const hanldePostCloseArticle = () => { SetPostShowArticle(false) }
    const [ViewPostArticles, SetPostShowArticles] = useState(false)
    const handlePostShowArticles = () => { SetPostShowArticles(true) }
    const hanldePostCloseArticles = () => { SetPostShowArticles(false) }
    const [NomArticle, setnomArticle] = useState("")
    const [Prix, setPrix] = useState("")
    const [MontTHT, setMontTHT] = useState("")
    const [ShowPhoto, setShowPhoto] = useState("")
    const [RemiseHT, setRemiseHT] = useState("")
    const [MontDV, setMontDV] = useState("")
    const [TotNetHT, setTotNetHT] = useState("")
    const [Description, setDescription] = useState("")
    const [NBAR, setNBAR] = useState(0)
    const [NumFact, setNumFact] = useState(0)
    const [Photo, setPhoto] = useState("");
var idfr=0
var idf=0
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const [DataFr, setDataFr] = useState([]);
    //const [idfr, setidfr] = useState(0);
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
    const GetFournisseurs = () => {
        //here we will get all employee data
        const url = `http://localhost:5000/getFournisseurs`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setDataFr(result)

                    console.log(result)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    /************************************************************************************************************/
    const FilterNumCom = () => {
        if(filter.length==0){
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
    }
    else{
setData(Data.filter(dt=>dt.Etat.includes(`${filter}`)))
    console.log("data after filter",Data)
    console.log("filter",filter)
    }
    
}
/************************************************************************************************************/
/********************************************************************************************************/

    const GetArticle = () => {
        //here we will get all employee data
        const url = `http://localhost:5000/Articles/${idfr}`
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
    const GetNBAr_Fr = () => {
        //here we will get all employee data
        const url = `http://localhost:5000/Articles/${idf}`
        axios.get(url)
            .then(response => {
                const result = response.data;
                setData(result)
                setNBAR(Data.length())
                    console.log(result)
                
            })
            .catch(err => {
                console.log(err)
            }) 
            console.log("called nowwwwwwwwwww")
    }
    
    const Ajout_Article = () => {
        const url = `http://localhost:5000/Ajout_Article`
        axios.post(url,{
            NomArticle:NomArticle,
            Description:Description,
            Prix:Prix,
            Photo:Photo
        })
           
                
                    window.location.reload()
                
           
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
        GetFournisseurs();
        setNumFact( Math.floor(Math.random() * 9999999).toString())
    }, [])
    return (
       
        <div  >
            
           <p style={{color:'#048a93',fontSize:"25px",marginLeft:"10px",fontFamily:"Times New Roman"}}>Liste des Articles</p>
            <hr></hr>
            <div>
            
                    <Button style={{marginLeft:'200px',width:"100px",backgroundColor:"#048a93",borderBlockColor:"#048a93"}} variant="secondary" onClick={() => {window.location.reload()}}>
                    Actualiser 
                    </Button>
                    <span style={{marginLeft:"20px"}}>Dernière actualisation le {date}</span>
                   <hr></hr> 
                    </div>
          
      

      <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static" 
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> <span style={{color:"#048a93"}}>{RowData.NomArticle}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                       <div>
<Table>
    <tr> 
                    <td rowSpan={4}>  <img src={`Uploads_Articles/${RowData.Photo}`} alt="Sample Image" width={"500px"} style={{border:'1px solid black'}} /></td> 
                    
                    <td style={{color:"#048a93"}}>{RowData.Description}</td>
                    </tr>
                    <tr><td>{RowData.Référence}</td></tr>
                    <tr><td>Prix<br></br><span style={{color:"red"}} ><b>{RowData.Prix}</b></span></td></tr>
                    <tr><td>Fournisseur</td></tr>
                       </Table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant='success' onClick={Ajout_Article}> Valider</Button>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Section>
{DataFr.map((item)=>

<Card
style={{ width: '18rem',display:"flex",float:"left",marginLeft:"20px", variant:"Secondary",cursor:"pointer" }}
className="gradient-border"
onClick={() => { handlePostShowArticles(idfr=item.id,GetArticle())}}
>

<Card.Header><b>Fournisseur {item.id}</b></Card.Header> 
<Card.Body>
  <Card.Title><FcManager size={"40px"}/> <b>{item.Nom_prenom} </b></Card.Title>
  <Card.Title>
    <FcViewDetails size="40"/><b>{NBAR} Articles</b>
  </Card.Title>
</Card.Body>
</Card>

)}
</Section>
 <div className='model-box-view'>
                <Modal
                    show={ViewPostArticles}
                    onHide={hanldePostCloseArticles}
                    backdrop="static" 
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title> <span style={{color:"#048a93"}}><b>Articles</b></span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                    <div className="container main-content">
        {Data.map((item)=>
        
        <div className="row product" style={{ border: "2.5px solid #048a93",marginBottom:"20px",cursor:"pointer"}} onClick={() => { handlePostShowArticle(SetRowData(item))}}>
        <div className="col-md-2">
          <img src={`Uploads_Articles/${item.Photo}`} alt="Sample Image"height={"150px"} width={"170px"} />
        </div>
        <br></br>
        <div className="col-md-8 product-detail" style={{marginLeft:"50px"}}>
          <h4 style={{color:"#048a93"}}>{item.NomArticle}</h4>
          <p>{item.Description}</p> 
          <span>{item.Réf}</span>
        </div> 
        <div className=" product-price">
         <span style={{color:"#048a93"}}>{item.Prix}</span>
        </div>
        <br></br>
      </div>
      
        )}
        
      </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostCloseArticles}>Close</Button>
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
const Section = styled.section`
  padding: 1rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
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
  .gradient-border {
    --border-width: 3.5px;
  
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    color: black;
    background: #EAEAEA;
    border-radius: var(--border-width);
  
    &::after {
      position: absolute;
      content: "";
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      z-index: -1;
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;
      border-radius: calc(2 * var(--border-width));
      animation: moveGradient 4s alternate infinite;
    }
  }
  
  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;

