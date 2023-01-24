import React from "react";

function PersonDetail({ personList, showPerson }) {

 function refundTicket(){
    fetch(`http://localhost:3000/persons/purchased/${id}`, {
        method: "Delete",
    })
 }
  return (
    <div>
      <header>
        <p> Select Profile
          <select id="persondetails" onChange={(e) => showPerson(e.target.value)}>
            {personList.map((person) => (
              <option  value={person.name}>{person.name}</option>
            ))}
          </select>
        </p>
        <button onClick={refundTicket}>X</button>
      </header>
    </div>
  );
}

export default PersonDetail;