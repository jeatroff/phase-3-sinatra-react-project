import './App.css';
import React, {useState, useEffect} from "react";
import PersonDetail from './PersonDetail';
import ConcertList from './ConcertList';
import PurchaseConcert from './PurchaseConcert';

function App() {

  const [personList, setPersonList] = useState([])
  const [concertList, setConcertList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/concerts")
      .then(resp => resp.json())
      .then(setConcertList)
    fetch("http://localhost:3000/persons")
      .then(resp => resp.json())
      .then(setPersonList)
  }, [])

  function buyConcert(newConcert) {
    setConcertList([...concertList, newConcert])
  }

  function showPerson(personName) {
    const selectPerson = personList.filter((person) => (person.Name === personName))
    setPersonList(selectPerson[0].list)
  }

  return (
    <div className="App">
      <header className="App-header">
      <PersonDetail personList={personList} showPerson={showPerson}/>
      <ConcertList concertList={concertList}/>
      <PurchaseConcert buyConcert={buyConcert}/>
      </header>
    </div>
  );
}

export default App;
