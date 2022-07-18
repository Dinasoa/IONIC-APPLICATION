import { useRef, useState } from "react"
import axios from "axios";
export function Form(){
    const [name , setName] = useState('') ;
    const [username , setUsername] = useState('') ;
    const [email  , setEmail] = useState('') ;
    const [streetAdress , setStreetAdress] = useState('') ;
    const ref = useRef(null) ;

    function displayWindow(){
        ref.current.style.display = "block" ;
    }
    
    function displayWindow2(e){
        ref.current.style.display = "none" ;
       
        e.preventDefault() ;

        const postData = [{name} , {username} , {email} , {streetAdress}]  
        
        console.log(postData)

        const promise = axios.post("https://jsonplaceholder.typicode.com/users" , postData)

        promise.then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
    <>
    <button className = "btn btn-primary add-button" onClick={displayWindow}>ADD</button>

    <div className="containerr" ref={ref}>

        <div className="form-group">      
           
            <label for="exampleInputEmail1">Name</label>
            <br></br>
            <input type="text" placeholder="Name" className="name" value={name} onChange={(e) => {setName(e.target.value)}} ></input>
            
            <br></br>
            <label for="exampleInputEmail1">Username</label>
            <br></br>
            <input type="text"  placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
            <br></br>
            <label for="exampleInputEmail1">Email</label>
            <br></br>
            <input type="email"  placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} ></input>
            <br></br>
            <label for="exampleInputEmail1">Street address</label>
            <br></br>
            <input type="text" placeholder="Street Address" value={streetAdress} onChange={(e) => {setStreetAdress(e.target.value)}}></input>
            <br></br>
            
     <button className = "btn btn-primary postButton" onClick={displayWindow2}>POST</button>
        </div>
    </div>
    </>
    )
}