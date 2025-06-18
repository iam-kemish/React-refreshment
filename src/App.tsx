
import ContactIndex from './Componenets/ContactPages/ContactIndex'
import { ContactTypes } from './Componenets/Types'
import {  useState,useEffect } from 'react'
import { Contexted } from './Context/Contexted'
import { Route, Routes } from 'react-router-dom'
import AddContact from './Componenets/ContactPages/AddContact'

function App() {
 const[name,setName] = useState("")
  const[email, setEmail] = useState("")
  const[number,setNumber] = useState("")
  const[editingContact, setEditingContact] = useState<ContactTypes | null>(null);
  // Code for adding the formdata into local storage in console//////////
  const [data, setData] = useState<ContactTypes[]>(() => {
  const storedData = localStorage.getItem("contacts");
  return storedData ? JSON.parse(storedData) : [];
});

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(data));
}, [data]);

/////////////////////////////////////////////////////////////////
// const[data,setData] = useState<ContactTypes[]>([])

  // console.log("data is", data)
  return (
    <>
    <Contexted.Provider value={{name, setName, email,setEmail,number,setNumber, data,setData, editingContact, setEditingContact}}>
    <Routes>
     <Route path="/" element={<ContactIndex />} />
     <Route path="/form" element={<AddContact />} />
     
    </Routes>
   </Contexted.Provider>
    </>
  )
}

export default App
