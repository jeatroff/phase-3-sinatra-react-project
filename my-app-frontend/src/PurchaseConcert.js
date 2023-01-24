import React, { useState } from "react";

function PurchaseConcert({  buyConcert }) {
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
      <button type="submit" onSubmit={handlePurchase}>Purchase</button>
    </div>
    );
}

export default PurchaseConcert;