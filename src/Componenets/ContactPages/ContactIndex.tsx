import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
import Footer from "../Layout/Footer";


const ContactIndex = () => {
 
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">📇 Contact Manager</h2>

      {/* Top actions */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <AddRandomContact />
        </div>
        <div className="col-md-4">
          <RemoveAllContact />
        </div>
        <div className="col-md-4">
          <AddContact  />
        </div>
      </div>

      {/* Contact lists */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <FavoriteContacts/>
        </div>
        <div className="col-lg-6 mb-4">
          <GeneralContacts/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactIndex;
