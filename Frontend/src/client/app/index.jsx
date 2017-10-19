import React from 'react';
import {render} from 'react-dom';
import Timetable from './Timetable.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timetable: [{time: 11, day: "Monday", room: "311", name: "Advanced Databases", age: 2, size: 23}, {time: 12, day: "Monday", room: "311", name: "Advanced Databases", people: 34}]};
  }

  render () {
    var data = this.state.timetable
    var monday = {day: "Monday"}
    var tuesday = {day: "Tuesday"}
    var wednesday = {day: "Wednesday"}
    var thursday = {day: "Thursday"}
    var friday = {day: "Friday"}
    var rows = [monday, tuesday, wednesday, thursday, friday]
    data.forEach(d => {if(d.day === "Monday"){ monday[d.time] = d.name}
                       if(d.day === "Tuesday"){tuesday[d.time] = d.name}
                       if(d.day === "Wednesday"){wednesday[d.time] = d.name}
                       if(d.day === "Thursday"){thursday[d.time] = d.name}
                       if(d.day === "Friday"){friday[d.time] = d.name}});
    console.log(monday);
    return <Timetable rows={rows}/>
  }


}


render(<App/>, document.getElementById('app'));
