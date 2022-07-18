import { IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem } from '@ionic/react'
import axios from "axios" ;
import { useEffect, useState } from "react";
import { useIonAlert } from '@ionic/react';

export function Tab1(){
  const[result , setResult] = useState<any[]>([]) ;
  const[load , setLoad] = useState(true);
  const[page , setPage ] = useState(1);
  const [alert] = useIonAlert() ; 

    useEffect(() => {
      const promise = axios.get(`https://wspc52.herokuapp.com/${page}`) ;
      promise
      .then((response) => {
        console.log(response);
        setResult((response.data["information"]));
        setLoad(false) ;
      })
      .catch((error) => {
        alert({
          header : "ALERT" ,
          message : "Pas de connexion",
          buttons: ["OK"]
        })
        console.error(error);
      });
          
    } , [page])

return (
  <>
    <IonContent color={`${load ? 'dark' : 'medium'}`}>
    
    <IonHeader>
      <IonToolbar>
        <IonTitle>OFFRE D'EMPLOI</IonTitle>
      </IonToolbar>
    </IonHeader>

    {(result || []).map((item) => (
      <>
        <div className='cardBox'>
          <h3>{item.title}</h3>
          <p><span>Entreprise</span>: {item.company}</p>
          <p><span>Contrat</span> : {item.contract}</p>
          <p><span>Description</span> : {item.description}</p> <br></br>
          <a href={item.href}>Info sur ce job</a>
        </div>
      </>
    ))}

    {
        load ? <IonSpinner color="warning" class='spin'/> :
      <>  
        <div className='button'>
        <button onClick={() => setPage(page-1)}>Previous</button>
        <button className='next' onClick={() => setPage(page+1)}>Next</button> 
        </div>          
        {console.log(page)}   
      </>  
    }

    </IonContent>
 
   </>
   );
};

