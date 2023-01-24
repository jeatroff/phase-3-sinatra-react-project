import React from "react";

function ConcertList({concertList}) {
    return (
    <div>
        <ul>
            {concertList}
        </ul>
    </div>
    );
  }

export default ConcertList;