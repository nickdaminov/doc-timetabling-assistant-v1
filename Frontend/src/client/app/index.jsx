import React from 'react';
import {render} from 'react-dom';
import Table from 'react-legit-table'
import Timetable from './Timetable.jsx';




class App extends React.Component {
  render () {
    var data = [{time: 11, day: "Monday", room: "311", name: "Advanced Databases", age: 2, size: 23}, {time: 12, day: "Monday", room: "311", name: "Advanced Databases", people: 34}]
    var monday = {day: "Monday", 9: "", 10: "", 11: "", 12: "", 13: "", 14:"", 15: "", 16: "", 17: ""}
    var tuesday = {day: "Tuesday", 9:"", 10:"", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: ""}
    var rows = [monday]
    data.forEach(d => {if(d.day = "Monday"){ monday[d.time] = d.name}});
    console.log(monday);
    return <Timetable rows={rows}/>
  }


}


render(<App/>, document.getElementById('app'));
