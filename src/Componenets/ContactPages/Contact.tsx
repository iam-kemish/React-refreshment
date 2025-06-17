import React from "react";
import { ContactTypes } from "../Types";

interface Props {
  contact: ContactTypes;
}

const Contact: React.FC<Props> = ({ contact }) => {
    const nameClass = `card-title mb-1 ${contact.isFavourite?"text-secondary" : "text-primary"}`
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
            className="btn btn-sm btn-outline-primary">
            Edit
          </button>
         <button
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
      </div>
    </div>
    
 
 </>
  );
};

export default Contact;
