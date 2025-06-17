import React, { useContext } from "react";
import Contact from "./Contact";
import { contactList } from "../Array";
import { Contexted } from "../../Context/Contexted";


const FavoriteContacts: React.FC = () => {
  const context = useContext(Contexted)
    if(!context) return null;
    const {data} = context
  const favorites = data.filter(u=>u.isFavorite == true)
  return (
    <div className="mt-4">
      <h3>⭐ Favorite Contacts</h3>
      <div>
      {
        favorites.map((contact, index) => {
  return <Contact contact={contact} key={index} />;
})
      }
      </div>
   
    </div>
  );
};

export default FavoriteContacts;
