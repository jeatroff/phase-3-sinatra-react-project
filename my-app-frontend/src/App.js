import './App.css';
import React, {useEffect, useState} from "react";
import PersonDetail from './PersonDetail';
import ConcertList from './ConcertList';
import Person from './Person';

function App() {

  const [personList, setPersonList] = useState([])
  const [concertList, setConcertList] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/concerts")
      .then(r => r.json())
      .then(setConcertList)
    fetch("http://localhost:9292/users")
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
      <ConcertList concertList={concertList} buyConcert={buyConcert}/>
      <Person />
      </header>
    </div>
  );
}

export default App;
