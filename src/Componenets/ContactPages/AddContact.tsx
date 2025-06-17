import React, { useContext } from "react";
import { Contexted } from "../../Context/Contexted";

const AddContact = () => {
  const context = useContext(Contexted)
  if(!context) return null;
  const {name, setName, email,setEmail,number,setNumber, data,setData} = context
  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const newContact = {
      id : Date.now(),
      name,
      email,
      number,
      isFavorite : false
    }
    setData([
      ...data, newContact])

      setName("")
      setEmail("")
      setNumber("")
    }
    // console.log(data);
  return (
  <form onSubmit={handleSubmit}>
      <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-10">
          <div className="card shadow-lg border-0 rounded-4 w-100">
            <div className="card-header bg-primary text-white rounded-top-4">
              <h4 className="mb-0 text-center">➕ Add New Contact</h4>
            </div>
            <div className="card-body px-4">
         
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter full name" onChange={e=> setName(e.target.value)} value={name}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} value={email} />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" onChange={e=> setNumber(e.target.value)} value={number} />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  Add Contact
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
};

export default AddContact;
