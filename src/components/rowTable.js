import axios from "axios";
import { startTransition, useRef, useState } from "react";

export function RowTable (props){
    const { name ,username ,  email , streetaddress , cityaddress , companyName } = props ;  
    const[nom , setNom] = useState("")
    const ref = useRef(null) ;
    function displayWindow(e){
        ref.current.style.display = "block" ;
    }
    
    function displayWindow2(e){
        ref.current.style.display = "none" ;
        const data = [ , {username} , {email} , {streetaddress} , {cityaddress} , {companyName}]
       
            const promise = axios.put("https://jsonplaceholder.typicode.com/users", data)
        
            promise.then(response => {
                    console.log("Data: ", response.data);
                }).catch(error => {
                    console.error(error);
                });
    }

    return(
    <>
     <div className="containerr" ref={ref}>     

            <div className="form-group">      
            
                <label for="exampleInputEmail1">Name</label>
                <br></br>
                <input type="text" placeholder="Name" className="name" value={nom} onChange={(e) => {setNom(e.target.value)}}></input>
                
                <br></br>
                <label for="exampleInputEmail1">Username</label>
                <br></br>
                <input type="text"  placeholder="Username" value={username}></input>
                <br></br>
                <label for="exampleInputEmail1" >Email</label>
                <br></br>
                <input type="email"  placeholder="Email" value={email}></input>
                <br></br>
                <label for="exampleInputEmail1">Street address</label>
                <br></br>
                <input type="text" placeholder="Street Address" value={streetaddress}></input>
                <br></br>
                
            <button className = "btn btn-primary postButton" onClick={displayWindow2}>UPDATE</button>
            </div>
        </div>

        <tr onClick={displayWindow}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{streetaddress}</td>
            <td>{cityaddress}</td>
            <td>{companyName}</td>
        </tr>
    </>
    )
}