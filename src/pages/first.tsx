import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem } from '@ionic/react'

interface JobAttribut {
  titre: string ,
  entreprise: string ,
  contrat: string , 
  description: string  
  href : string 
}

export function First({titre, entreprise , contrat , description , href}:JobAttribut){
  return (
    <>
          <div className='cardBox'>
            <h3>{titre}</h3>
            <p><span>Entreprise</span>: {entreprise}</p>
            <p><span>Contrat</span> : {contrat}</p>
            <p><span>Description</span> : {description}</p> <br></br>
            <a href={href}>Info sur ce job</a>
          </div>
     </>
  );
};

