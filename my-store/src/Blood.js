// import Header from "./Header";
// import React, { useState, useEffect } from "react";
// import './App.css';

// export default function Blood() {
//   const [group, setGroup] = useState('');
//   const [type, setType] = useState('');
//   const [result, setResult] = useState([]);

//   async function getblood() {
//     console.log('called !')
//     try {
//       const response = await fetch('https://jsonserver-iota.vercel.app/blood');
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
//       const data = await response.json();
//       const bloodGroup = data.find(blood => Object.keys(blood)[0] === group);
//       if (type === 'donner') {
//         setResult(bloodGroup[group][0].donner);
//       }
//       if (type === 'acceptor') {
//         setResult(bloodGroup[group][1].acceptor);
//       }
//       console.log(result);
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   }

//   return (
//     <div>
//       <Header />
//       <div className="blood">
//         <form>
//           <label>Enter Your Blood Group:</label>
//           <input type="text" value={group} onChange={(e) => { setGroup(e.target.value) }} /><br />
//           <label>What Is Your Type:</label>
//           <input type="text" value={type} onChange={(e) => { setType(e.target.value) }} />
//           <button type="button" onClick={getblood}>Find</button>
//         </form>
//       </div>
//       <div className="card">
//       <div className="bloodlist">
//         {result && result.map((data, index) => (
//           <h2 key={index}>{data}</h2>
//         ))}
//       </div>
//       </div>
      
//     </div>
//   )
// }

import Header from "./Header";
import React, { useState, useEffect } from "react";
import './App.css';

export default function Blood() {
  const [group, setGroup] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState([]);

  async function getblood() {
    console.log('called !')
    try {
      const response = await fetch('https://jsonserver-iota.vercel.app/blood');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      const bloodGroup = data.find(blood => Object.keys(blood)[0] === group);
      if (type === 'donner') {
        setResult(bloodGroup[group][0].donner);
      }
      if (type === 'acceptor') {
        setResult(bloodGroup[group][1].acceptor);
      }
      console.log(result);
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  return (
    <div>
      <Header />
      <div className="blood">
        <form>
          <label>Enter Your Blood Group:</label>
          <input type="text" value={group} onChange={(e) => { setGroup(e.target.value) }} /><br />
          <label>What Is Your Type:</label>
          <select value={type} onChange={(e) => { setType(e.target.value) }}>
            <option value="">Select Type</option>
            <option value="donner">Donner</option>
            <option value="acceptor">Acceptor</option>
          </select>
          <button type="button" onClick={getblood}>Find</button>
        </form>
      </div>
      <div className="card">
        <div className="bloodlist">
          {result && result.map((data, index) => (
            <h2 key={index}>{data}</h2>
          ))}
        </div>
      </div>
    </div>
  )
}
