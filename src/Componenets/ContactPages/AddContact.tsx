import React, { useContext, useEffect } from "react";
import { Contexted } from "../../Context/Contexted";
import { Link } from "react-router-dom";

const AddContact = () => {
  const context = useContext(Contexted);
  if (!context) return null;

  const { name, setName, email, setEmail, number, setNumber, data, setData, setEditingContact, editingContact } = context;
  useEffect(()=>{
  if(editingContact){
    setName(editingContact.name)
    setEmail(editingContact.email)
    setNumber(editingContact.number)
  }else {
     setName("");
      setEmail("");
      setNumber("");
  }
  },[editingContact])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (editingContact) {
    //  We're editing an existing contact
    const updatedContact = {
      ...editingContact, // Keep id and isFavorite
      name,
      email,
      number,
    };

    //  Replace only the matching contact in the list
    const updatedList = data.map((c) =>
      c.id === editingContact.id ? updatedContact : c
    );

    setData(updatedList);       // Update context state
    setEditingContact(null);    // Clear editing mode
  } else {
    //  We're adding a new contact
    const newContact = {
      id: Date.now(),
      name,
      email,
      number,
      isFavorite: false,
    };

    setData([...data, newContact]);  // Add to contact list
  }

  // 🧹 Clear form fields in both cases
  setName("");
  setEmail("");
  setNumber("");
};


  return (
    <form onSubmit={handleSubmit}>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-gradient bg-primary text-white rounded-top-4 py-3">
                <h4 className="mb-0 text-center">{editingContact ? "✏️ Edit Contact" : "➕ Add New Contact"}</h4>
              </div>
              <div className="card-body p-4">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">👤 Full Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">📧 Email Address</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="9800000000"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                  <label htmlFor="phone">📞 Phone Number</label>
                </div>

                <button type="submit" className="btn btn-success w-100 py-2">
                  ✅ Submit
                </button>
                <Link className="btn btn-primary w-100 py-2 mt-2" to="/">
                  Back 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddContact;
