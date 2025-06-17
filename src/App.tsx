
import ContactIndex from './Componenets/ContactPages/ContactIndex'
import { ContactTypes } from './Componenets/Types'
import {  useState,useEffect } from 'react'
import { Contexted } from './Context/Contexted'

function App() {
 const[name,setName] = useState("")
  const[email, setEmail] = useState("")
  const[number,setNumber] = useState("")
  const [data, setData] = useState<ContactTypes[]>(() => {
  const storedData = localStorage.getItem("contacts");
  return storedData ? JSON.parse(storedData) : [];
});

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(data));
}, [data]);

  console.log("data is", data)
  return (
    <>
    <Contexted.Provider value={{name, setName, email,setEmail,number,setNumber, data,setData}}>
    <ContactIndex/>
   </Contexted.Provider>
    </>
  )
}

export default App
