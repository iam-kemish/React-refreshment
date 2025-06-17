import React, { useContext, useState } from "react";
import { Contexted } from "../../Context/Contexted";

const GeneralContacts: React.FC = () => {
   const context = useContext(Contexted)
    if(!context) return null;
    const{data} = context;
  const generalContacts = data.filter((u) => !u.isFavourite);

  const MarkAsFavourite = (id: number) =>{
     
  };

  return (
    <div className="mt-4">
      <h3>👥 General Contacts</h3>
      {generalContacts.length === 0 ? (
        <p>No general contacts.</p>
      ) : (
       generalContacts.map((contact,index)=>{
       return(
          <div key={index} className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title mb-1">{contact.name}</h5>
                <p className="mb-0 text-muted">📧 {contact.email}</p>
                <p className="mb-0 text-muted">📞 {contact.number}</p>
              </div>
              <div>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => MarkAsFavourite(contact.id)}
                >
                  ⭐ Add to Favourites
                </button>
              </div>
            </div>
          </div>
       )
       })
      )}
    </div>
  );
};

export default GeneralContacts;
