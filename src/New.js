import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
    const [business_code, setbusiness_code] = useState("");

function saveData()
{
  let data={business_code}
console.warn(data);
  fetch("http://localhost:8006/Summer_Internship_Backend/Add_invoice", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={business_code} onChange={(e)=>{setbusiness_code(e.target.value)}}  /> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default App;