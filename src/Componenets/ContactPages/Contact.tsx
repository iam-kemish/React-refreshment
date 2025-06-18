import React, { MouseEventHandler, useContext } from "react";
import { ContactTypes } from "../Types";
import { Contexted } from "../../Context/Contexted";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  contact: ContactTypes;
}

const Contact: React.FC<Props> = ({ contact }) => {

   const context = useContext(Contexted)
      if(!context) return null;
      const {data,setData, setEditingContact} = context
    
      const JoinForm = useNavigate();
     const JoinFormPage = ()=>{
      
       setEditingContact(contact)
       console.log(contact, "C")
       JoinForm("/form")
     }

   const DeleteContact =(id:number)=>{
    const updated = data.filter((contact)=>{
        return contact.id !== id
    })
   setData(updated);
   }

    const nameClass = `card-title mb-1 ${contact.isFavorite?"text-secondary" : "text-primary"}`
   
  return (
 <>

           <div className="card mb-3 shadow-sm border-0">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className={nameClass}>{contact.name}</h5>
          <p className={nameClass}>📧 {contact.email}</p>
          <p className={nameClass}>📞 {contact.number}</p>
        </div>
      <button
            className="btn btn-sm btn-outline-primary" 
            onClick={() =>JoinFormPage()}
            >
            Edit
          </button>
         <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => DeleteContact(contact.id)}
          >
            Delete
          </button>
      </div>
    </div>
 </>
  );
};

export default Contact;
