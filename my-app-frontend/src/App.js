import './App.css';
import React, {useEffect, useState, useSyncExternalStore} from "react";
import PersonDetail from './PersonDetail';
import PurchasedTickets from './PurchasedTickets';
import ConcertList from './ConcertList';
import PersonForm from './PersonForm';


function App() {
  const initialPerson = {name: "", email: "", password: "", tickets: []}
  const [personList, setPersonList] = useState([])
  const [concertList, setConcertList] = useState([])
  const [currentPerson, setCurrentPerson] = useState(initialPerson)


  useEffect(() => {
    fetch("http://localhost:9292/concerts")
      .then(r => r.json())
      .then(setConcertList)
    fetch("http://localhost:9292/users")
      .then(resp => resp.json())
      .then(people => {
        setPersonList(people)
        setCurrentPerson(people[0])
      })
  }, [])


  function showPerson(personName) {
    const selectPerson = personList.filter((person) => (person.name === personName))
    setCurrentPerson(selectPerson[0]) 
  }
  function addPerson(newPerson) {
    setPersonList([...personList, newPerson])
  }

  return (
    <div className="App">
      <header className="App-header">
      <PersonDetail personList={personList} showPerson={showPerson}/>
      <PersonForm addPerson={addPerson}/>
      <PurchasedTickets currentPerson={currentPerson} concertList={concertList} setConcertList={setConcertList}setCurrentPerson={setCurrentPerson}/>
      <ConcertList concertList={concertList} currentPerson={currentPerson} setConcertList={setConcertList} setCurrentPerson={setCurrentPerson}/>
      </header>
    </div>
  );
}

export default App;
