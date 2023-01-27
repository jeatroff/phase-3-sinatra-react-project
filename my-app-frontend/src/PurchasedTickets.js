import React from "react"

function PurchasedTickets({currentPerson, concertList, setConcertList, setCurrentPerson}) {


    function refundTicket(ticket) {
        
        let purchasedConcert = concertList.filter((concert) => (concert.id === ticket.concert_id))[0]


        fetch(`http://localhost:9292/tickets/${ticket.id}`, {
            method : "DELETE",
              })
              .then(res => res.json())
              .then(data => data)

        let updatedConcertList = concertList
        updatedConcertList[concertList.indexOf(purchasedConcert)].unsold_tickets += 1
        let unsold_tickets = updatedConcertList[concertList.indexOf(purchasedConcert)].unsold_tickets
        setConcertList([...updatedConcertList])
      
        fetch(`http://localhost:9292/concerts/${ticket.concert_id}`, {
            method: 'PATCH',
            headers: {
            "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                unsold_tickets: unsold_tickets,
    }),
        })
            .then((r) => r.json())
            .then((newConcert) => console.log(newConcert)); 

        let updatedCurrentPerson = currentPerson
        updatedCurrentPerson.tickets = currentPerson.tickets.filter((t) => (t.id !== ticket.id))
        setCurrentPerson(updatedCurrentPerson)
  }

    

    return (
        <div>
            <div className="purchaseticket">Purchased Tickets:
                {currentPerson.tickets.map((ticket) => (
                    <p>
                        Artist: {concertList.filter((concert) => (concert.id === ticket.concert_id))[0].artist}, 
                        Date: {concertList.filter((concert) => (concert.id === ticket.concert_id))[0].date}, 
                        Ticket ID: {ticket.id},
                        Refund Ticket: <button type="click" onClick={(e) => refundTicket(ticket)}>X</button>
                    </p>
                    
                ))}
            </div>
        </div>
    )
}

export default PurchasedTickets;