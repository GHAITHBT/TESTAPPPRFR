const express = require('express');
const db = require('./config')
const cors = require('cors')
const multer = require('multer')
const app = express();
const  PORT = 5000;
app.use(cors());
app.use(express.json())
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/Uploads_Articles')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        // or 
        // uuid, or fieldname
        cb(null, originalname);
    }
})
const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/Uploads_Factures')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        // or 
        // uuid, or fieldname
        cb(null, originalname);
    }
})
const upload=multer({storage:storage});
const upload1=multer({storage:storage1});

// Route to get all posts
app.get("/getFactures", (req,res)=>{
db.query("SELECT * FROM facture ", (err,result)=>{ 
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });
app.get("/getFournisseurs", (req,res)=>{
    db.query("SELECT * FROM fournisseur ", (err,result)=>{ 
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });
    app.get("/getUtilisateurs", (req,res)=>{
        db.query("SELECT * FROM utilisateur ", (err,result)=>{ 
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });
app.get("/getEtatNL", (req,res)=>{
    db.query("SELECT * FROM facture where Etat like'Non Lue'", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });  
    app.get("/getEtatENC", (req,res)=>{
        db.query("SELECT * FROM facture where Etat like'En cours de traitement'", (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });
        app.get("/getEtatNL/:id", (req,res)=>{
            db.query("SELECT * FROM facture where Etat like'Non Lue' && IDFR = ?",[req.params.id], (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result)
            });   });  
            app.get("/getEtatENC/:id", (req,res)=>{
                db.query("SELECT * FROM facture where Etat like'En cours de traitement'&& IDFR=?",[req.params.id], (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result)
                });   });  
/**********************************************************Filter*************************************************** */
        app.get("/getnumfactasc", (req,res)=>{ 
            db.query("SELECT * FROM facture order by numfact asc  ", (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result)
            });   });  
            app.get("/getnumfactdesc", (req,res)=>{ 
                db.query("SELECT * FROM facture order by numfact desc  ", (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result)
                });   });  
                /**************************************************** */
                app.get("/getdtaasc", (req,res)=>{ 
                    db.query("SELECT * FROM facture order by DateAjout asc  ", (err,result)=>{
                        if(err) {
                        console.log(err)
                        } 
                    res.send(result)
                    });   });  
                    app.get("/getdtadesc", (req,res)=>{ 
                        db.query("SELECT * FROM facture order by DateAjout desc  ", (err,result)=>{
                            if(err) {
                            console.log(err)
                            } 
                        res.send(result)
                        });   });
                        /************************************************************ */
                        app.get("/getidasc", (req,res)=>{ 
                            db.query("SELECT * FROM facture order by id asc  ", (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getiddesc", (req,res)=>{ 
                                db.query("SELECT * FROM facture order by id desc  ", (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result)
                                });   });
                                /*************************************************************** */
                                app.get("/getdtfasc", (req,res)=>{ 
                                    db.query("SELECT * FROM facture order by DateFact asc  ", (err,result)=>{
                                        if(err) {
                                        console.log(err)
                                        } 
                                    res.send(result)
                                    });   });  
                                    app.get("/getdtfdesc", (req,res)=>{ 
                                        db.query("SELECT * FROM facture order by DateFact desc  ", (err,result)=>{
                                            if(err) {
                                            console.log(err)
                                            } 
                                        res.send(result)
                                        });   });
                                        /**************************************************************** */
                                        app.get("/getfrasc", (req,res)=>{ 
                                            db.query("SELECT * FROM facture order by DateAjout asc  ", (err,result)=>{
                                                if(err) {
                                                console.log(err)
                                                } 
                                            res.send(result)
                                            });   });  
                                            app.get("/getfrdesc", (req,res)=>{ 
                                                db.query("SELECT * FROM facture order by DateAjout desc  ", (err,result)=>{
                                                    if(err) {
                                                    console.log(err)
                                                    } 
                                                res.send(result)
                                                });   });
                                                /***********************************Facture_fr********************** */
app.get("/getnumfactasc/:id", (req,res)=>{ 
            db.query("SELECT * FROM facture where IDFR = ? order by numfact asc  ",[req.params.id], (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result)
            });   });  
            app.get("/getnumfactdesc/:id", (req,res)=>{ 
                db.query("SELECT * FROM facture where IDFR = ? order by numfact desc  ",[req.params.id], (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result)
                });   });  
                /**************************************************** */
                app.get("/getdtaasc/:id", (req,res)=>{ 
                    db.query("SELECT * FROM facture where IDFR = ? order by DateAjout asc  ",[req.params.id], (err,result)=>{
                        if(err) {
                        console.log(err)
                        } 
                    res.send(result)
                    });   });  
                    app.get("/getdtadesc/:id", (req,res)=>{ 
                        db.query("SELECT * FROM facture where IDFR = ? order by DateAjout desc  ",[req.params.id], (err,result)=>{
                            if(err) {
                            console.log(err)
                            } 
                        res.send(result)
                        });   });
                        /************************************************************ */
                        app.get("/getidasc/:id", (req,res)=>{ 
                            db.query("SELECT * FROM facture where IDFR = ? order by id asc  ",[req.params.id], (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getiddesc/:id", (req,res)=>{ 
                                db.query("SELECT * FROM facture where IDFR = ? order by id desc  ",[req.params.id], (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result)
                                });   });
                                /*************************************************************** */
                                app.get("/getdtfasc/:id", (req,res)=>{ 
                                    db.query("SELECT * FROM facture where IDFR = ? order by DateFact asc  ",[req.params.id], (err,result)=>{
                                        if(err) {
                                        console.log(err)
                                        } 
                                    res.send(result)
                                    });   });  
                                    app.get("/getdtfdesc/:id", (req,res)=>{ 
                                        db.query("SELECT * FROM facture where IDFR = ? order by DateFact desc  ",[req.params.id], (err,result)=>{
                                            if(err) {
                                            console.log(err)
                                            } 
                                        res.send(result)
                                        });   });
                                        /**************************************************************** */
                                        app.get("/getfrasc/:id", (req,res)=>{ 
                                            db.query("SELECT * FROM facture where IDFR = ? order by DateAjout asc  ",[req.params.id], (err,result)=>{
                                                if(err) {
                                                console.log(err)
                                                } 
                                            res.send(result)
                                            });   });  
                                            app.get("/getfrdesc/:id", (req,res)=>{ 
                                                db.query("SELECT * FROM facture where IDFR = ? order by DateAjout desc  ", [req.params.id],(err,result)=>{
                                                    if(err) {
                                                    console.log(err)
                                                    } 
                                                res.send(result)
                                                });   });
/********************************************************************Paiement ****************************************/
app.get("/getPAnumfactasc", (req,res)=>{ 
    db.query("SELECT * FROM paiement order by numfact asc  ", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });  
    app.get("/getPAnumfactdesc", (req,res)=>{ 
        db.query("SELECT * FROM paiement order by numfact desc  ", (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });  
        /**************************************************** */
        app.get("/getPAdtaasc", (req,res)=>{ 
            db.query("SELECT * FROM paiement order by DateAjout asc  ", (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result)
            });   });  
            app.get("/getPAdtadesc", (req,res)=>{ 
                db.query("SELECT * FROM paiement order by DateAjout desc  ", (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result)
                });   });
                /************************************************************ */
                app.get("/getPAidasc", (req,res)=>{ 
                    db.query("SELECT * FROM paiement order by id asc  ", (err,result)=>{
                        if(err) {
                        console.log(err)
                        } 
                    res.send(result)
                    });   });  
                    app.get("/getPAiddesc", (req,res)=>{ 
                        db.query("SELECT * FROM paiement order by id desc  ", (err,result)=>{
                            if(err) {
                            console.log(err)
                            } 
                        res.send(result)
                        });   });
                        /*************************************************************** */
                        app.get("/getPAdtfasc", (req,res)=>{ 
                            db.query("SELECT * FROM paiement order by DateFact asc  ", (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getPAdtfdesc", (req,res)=>{ 
                                db.query("SELECT * FROM paiement order by DateFact desc  ", (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result)
                                });   });
                                /**************************************************************** */
                                app.get("/getPAfrasc", (req,res)=>{ 
                                    db.query("SELECT * FROM paiement order by DateAjout asc  ", (err,result)=>{
                                        if(err) {
                                        console.log(err)
                                        } 
                                    res.send(result)
                                    });   });  
                                    app.get("/getPAfrdesc", (req,res)=>{ 
                                        db.query("SELECT * FROM paiement order by DateAjout desc  ", (err,result)=>{
                                            if(err) {
                                            console.log(err)
                                            } 
                                        res.send(result)
                                        });   });
                                        /*************************************************************** */
                        app.get("/getPAdtpasc", (req,res)=>{ 
                            db.query("SELECT * FROM paiement order by DatePaiement asc  ", (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getPAdtpdesc", (req,res)=>{ 
                                db.query("SELECT * FROM paiement order by DatePaiement desc  ", (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result)
                                });   });
                                /*************************************************************** */
                        app.get("/getPAmtasc", (req,res)=>{ 
                            db.query("SELECT * FROM paiement order by Montant asc  ", (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getPAmtdesc", (req,res)=>{ 
                                db.query("SELECT * FROM paiement order by Montant desc  ", (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result) 
                                });   });
                /*************************************************paiement_fr****************************************** */
app.get("/getPAnumfactasc/:id", (req,res)=>{ 
    db.query("SELECT * FROM paiement where IDFR = ? order by numfact asc  ",[req.params.id], (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });  
    app.get("/getPAnumfactdesc/:id", (req,res)=>{ 
        db.query("SELECT * FROM paiement where IDFR = ? order by numfact desc  ",[req.params.id], (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result)
        });   });  
        /**************************************************** */
        app.get("/getPAdtaasc/:id", (req,res)=>{ 
            db.query("SELECT * FROM paiement where IDFR = ? order by DateAjout asc  ",[req.params.id], (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result)
            });   });  
            app.get("/getPAdtadesc/:id", (req,res)=>{ 
                db.query("SELECT * FROM paiement where IDFR = ? order by DateAjout desc  ",[req.params.id], (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result)
                });   });
                /************************************************************ */
                app.get("/getPAidasc/:id", (req,res)=>{ 
                    db.query("SELECT * FROM paiement where IDFR = ? order by id asc  ",[req.params.id], (err,result)=>{
                        if(err) {
                        console.log(err)
                        } 
                    res.send(result)
                    });   });  
                    app.get("/getPAiddesc/:id", (req,res)=>{ 
                        db.query("SELECT * FROM paiement where IDFR = ? order by id desc  ",[req.params.id], (err,result)=>{
                            if(err) {
                            console.log(err)
                            } 
                        res.send(result)
                        });   });
                        /*************************************************************** */
                        app.get("/getPAdtfasc/:id", (req,res)=>{ 
                            db.query("SELECT * FROM paiement where IDFR = ? order by DateFact asc  ",[req.params.id], (err,result)=>{
                                if(err) {
                                console.log(err)
                                } 
                            res.send(result)
                            });   });  
                            app.get("/getPAdtfdesc/:id", (req,res)=>{ 
                                db.query("SELECT * FROM paiement where IDFR = ? order by DateFact desc  ",[req.params.id], (err,result)=>{
                                    if(err) {
                                    console.log(err)
                                    } 
                                res.send(result)
                                });   });
                                /**************************************************************** */
                                app.get("/getPAfrasc/:id", (req,res)=>{ 
                                    db.query("SELECT * FROM paiement where IDFR = ? order by DateAjout asc  ",[req.params.id], (err,result)=>{
                                        if(err) {
                                        console.log(err)
                                        } 
                                    res.send(result)
                                    });   });  
                                    app.get("/getPAfrdesc/:id", (req,res)=>{ 
                                        db.query("SELECT * FROM paiement where IDFR = ? order by DateAjout desc  ", [req.params.id],(err,result)=>{
                                            if(err) {
                                            console.log(err)
                                            } 
                                        res.send(result)
                                        });   });



                /********************************Filter***************************************************** */
app.get("/getPaiement", (req,res)=>{
    db.query("SELECT * FROM paiement", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result) 
    });   });
    app.get("/Articles", (req,res)=>{
        db.query("SELECT * FROM article", (err,result)=>{
            if(err) {
            console.log(err)
            } 
        res.send(result) 
        });   });
        app.get("/Articles/:idfr", (req,res)=>{
            
            db.query("SELECT * FROM article where ID_FR = ?",req.params.idfr, (err,result)=>{
                if(err) {
                console.log(err)
                } 
            res.send(result) 
            });   });
            app.get("/NBART", (req,res)=>{
            
                db.query("SELECT COUNT(ID_FR)from article GROUP by (ID_FR);", (err,result)=>{
                    if(err) {
                    console.log(err)
                    } 
                res.send(result) 
                });   });
 
// Route to get one post
app.get("/getFournisseur/:username/:password", (req,res)=>{

 db.query("SELECT * FROM `fournisseur` WHERE  username = ? AND password = ?", [req.params.username,req.params.password], 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });
    app.get("/getFactureBYid/:id", (req,res)=>{

        db.query("SELECT * FROM `facture` WHERE  IDFR = ? ", [req.params.id], 
        (err,result)=>{
           if(err) {
           console.log(err)
           } 
           res.send(result)
           });   });
           app.get("/getFournisseurBYid/:id", (req,res)=>{

            db.query("SELECT * FROM `fournisseur` WHERE  id = ? ", [req.params.id], 
            (err,result)=>{
               if(err) {
               console.log(err)
               } 
               res.send(result)
               });   });
    app.get("/getUtilisateur/:username/:password", (req,res)=>{

        db.query("SELECT * FROM `utilisateur` WHERE  username = ? AND password = ?", [req.params.username,req.params.password], 
        (err,result)=>{
           if(err) {
           console.log(err)
           } 
           res.send(result)
           });   });

// Route for creating the post
app.post('/api/create', (req,res)=> {

db.query("INSERT INTO test(nom)VALUES(testing)", (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/update_etat/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE facture SET Etat = 'En cours de traitement' WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })
/************************************************************************************************* */
 
//@type   POST
//route for post data
/*app.post("/upload", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://127.0.0.1:5000/images/' + req.file.filename
        var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
        })
    }
}) */
app.post('/upload_Article',upload.single('article'),(req,res)=>{
    return res.json({status:'OK'})
    });
    app.post('/upload_Facture',upload1.single('avatar'),(req,res)=>{
        return res.json({status:'OK'})
        });





    app.post('/Ajout_Facture', (req,res)=> {
        let numfact=req.body.NumFact
        let DateFact=req.body.startDate
        let DateAjout=req.body.date 
        let Etat=req.body.Etat
        let Fichier=req.body.Fichier
        let TypeFichier=req.body.TypeFichier
        let IDFR=req.body.IDFR
        let Fournisseur=req.body.Fournisseur

        db.query("INSERT INTO `facture`(`numfact`, `DateFact`, `DateAjout`, `Etat`, `Fichier`,`TypeFichier`,`IDFR`,`Fournisseur`) VALUES ( ?,?,?,?,?,?,?,?)",[numfact,DateFact,DateAjout,Etat,Fichier,TypeFichier,IDFR,Fournisseur], (err,result)=>{
           if(err) {
           console.log(err)
           } 
           console.log(result)
        });   })
         
        app.post('/add_Paiement', (req,res)=> {
            let id=req.body.idfact
            let numfact=req.body.NumFact
            let DateFact=req.body.DateFact
            let DateAjout=req.body.DateAjout 
            let DatePaiement=req.body.date    
            let Montant=req.body.Montant
            let fichier=req.body.fichier
            let TypeFichier=req.body.TypeFichier
            let Fournisseur=req.body.Fournisseur
            let IDFR=req.body.IDFR
            db.query("INSERT INTO `paiement`(`id`,`numfact`, `DateFact`, `DateAjout`, `DatePaiement`, `Montant`, `Fournisseur`, `IDFR`, `Fichier`, `TypeFichier`) VALUES ( ?,?,?,?, ?,?,?,?,?,?)",[id,numfact,DateFact,DateAjout,DatePaiement,Montant,Fournisseur,IDFR, fichier,TypeFichier], (err,result)=>{
               if(err) {
               console.log(err)
                
               }  
               console.log(result)
            });   })
            app.post('/Ajout_Article', (req,res)=> {
                let NomArticle=req.body.NomArticle
                let Description=req.body.Description
                let Référence=req.body.Référence
                let Prix=req.body.Prix
                let Photo=req.body.Photo
                let IDFR=req.body.IDFR
                let Fournisseur=req.body.Fournisseur
                let date=req.body.date
                
    
                db.query("INSERT INTO `article`( `NomArticle`, `Description`, `Prix`, `Photo`, `Réf`, `Fournisseur`, `DateAjout`,`ID_FR`) VALUES  (?,?,?,?,?,?,?,?)",[NomArticle,Description,Prix,Photo,Référence,Fournisseur,date,IDFR], (err,result)=>{
                   if(err) {
                   console.log(err)
                    
                   }  
                   console.log(result)
                });   })
            
            app.post('/Ajout_fournisseur', (req,res)=> {
               let  fullName=req.body.fullName
               let  email=req.body.email
               let  téléphone=req.body.téléphone
               let  adresse=req.body.adresse
               let  mat_fisc=req.body.mat_fisc
               let  username=req.body.username
               let  password=req.body.password
    
                db.query("INSERT INTO fournisseur(Nom_prenom, adresse, email, téléphone, mat_fisc, username, password) VALUES ( ?,?,?,?,?,?,?)",[fullName,adresse,email,téléphone,mat_fisc,username,password], (err,result)=>{
                   if(err) {
                   console.log(err)
                    
                   }  
                   console.log(result)
                });   })
                app.post('/Ajout_Utilisateur', (req,res)=> {
                    let  fullName=req.body.fullName
                  
                    let  username=req.body.username
                    let  password=req.body.password
         
                     db.query("INSERT INTO `utilisateur`( `Nom_prenom`, `username`, `password`) VALUES ( ?,?,?)",[fullName,username,password], (err,result)=>{
                        if(err) {
                        console.log(err)
                         
                        }  
                        console.log(result)
                     });   })
                
           
app.listen(PORT, ()=>{ 
    console.log(`Server is running on ${PORT}`)
}) 