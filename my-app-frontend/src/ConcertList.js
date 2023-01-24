import React, {useState} from "react";

function ConcertList({concertList, buyConcert}) {
    const [purchasedConcert, setPurchasedConcert] = useState("")

    function handlePurchase(e) {
        e.preventDefault()

        const addConcert = {
          
        }
    
    fetch("http://localhost:3000/persons/purchased", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(addConcert)
    })
      .then(resp => resp.json())
      .then(addConcert=> buyConcert(addConcert))
    }

    return (
    <div>
        <ul>
            {concertList.map((concert) => (
            <li>
                Artist: {concert.artist}, 
                Date: {concert.date} 
                Ticket Left: {concert.unsold_tickets} ==>
                <button type="submit" onSubmit={handlePurchase}>Purchase</button>
            </li>))}
            
        </ul>
    </div>
    );
  }

export default ConcertList;