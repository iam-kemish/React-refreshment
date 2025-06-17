// ContactIndex.tsx

import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
import Footer from "../Layout/Footer";
import { useContext } from "react";
import { Contexted } from "../../Context/Contexted";

const ContactIndex = () => {
  const context = useContext(Contexted);
  if(!context) return null;
  const{setData} = context
  const handleRemove =()=>{
  setData([])
  }
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-6">📇 Contact Manager</h2>

      {/* Top Actions */}
      <section className="row justify-content-center mb-5">
        <div className="col-md-4 mb-3">
          <AddRandomContact />
        </div>
        <div className="col-md-4 mb-3">
          <RemoveAllContact />
        </div>
        <div className="col-md-4 mb-3">
          <AddContact />
        </div>
      </section>

      {/* 🔴 Remove All Contacts Button (UI only) */}
      <div className="text-center mb-4">
        <button className="btn btn-danger px-4 py-2" onClick={handleRemove}>
          🗑️ Remove All Contacts
        </button>
      </div>

      {/* Contact Lists */}
      <section className="row">
        <div className="col-lg-6 mb-4">
          <div className="p-3 border rounded shadow-sm bg-light h-100">
            <FavoriteContacts />
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="p-3 border rounded shadow-sm bg-light h-100">
            <GeneralContacts />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactIndex;
