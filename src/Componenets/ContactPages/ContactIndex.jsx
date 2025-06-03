import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";
import Footer from "../Layout/Footer";
const ContactIndex =()=>{
return(
    <div className="container">
    <div className="row py-3">
        <div className="col-4 offset-2">
           <AddRandomContact/>
        </div>
        <div className="col-4">
           <RemoveAllContact/>
        </div>
        <div className="col-4">
          <AddContact/>
        </div>
        <div className="col-4">
        <FavoriteContacts/>
        </div>
        <div className="col-4">
       <GeneralContacts/>
        </div>
    </div>
    <Footer/>
</div>
)
}
export default ContactIndex;