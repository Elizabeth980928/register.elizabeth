import React from 'react';
import { Router } from 'react-router';
import './Stylling.css';
import {useParams} from 'react-router-dom'


const Userinfor = ({d,handleDeleteClick}) => {
const  id = useParams();
    return ( 
        <div className="app-container">
            <div className="usersbox">
           
             {d.fullName} {d.address} {d.email} {d.location} <br/> 
             
                   
        <button type="button" onClick={()=>handleDeleteClick(d.id)} className="buttonDelete">Delete</button>
        </div>
        </div>
     );
}
 
export default Userinfor;