import React from 'react';
import {render} from 'react-dom';
import Timetable from './Timetable.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timetable: [{time: 11, day: "Monday", room: "311", name: "Advanced Databases"}, {time: 12, day: "Monday", room: "311", name: "Advanced Databases"},
                              {time: 9, day: "Monday", room: "311", name: "Operations Research"}, {time: 10, day: "Monday", room: "311", name: "Operations Research"},
                              {time: 16, day: "Monday", room: "311", name: "Information and Coding"},{time: 17, day: "Monday", room: "311", name: "Information and Coding"},
                              {time: 9, day: "Tuesday", room: "311", name: "Robotics"},{time: 10, day: "Tuesday", room: "311", name: "Robotics"},
                              {time: 11, day: "Tuesday", room: "311", name: "Simulation and Modelling"}, {time: 12, day: "Tuesday", room: "311", name: "Simulation and Modelling"},
                              {time: 14, day: "Tuesday", room: "311", name: "Type Systems"}, {time: 15, day: "Tuesday", room: "311", name: "Type Systems"},
                              {time: 16, day: "Tuesday", room: "311", name: "Computer Vision"}, {time: 17, day: "Tuesday", room: "311", name: "Computer Vision"},
                              {time: 9, day: "Thursday", room: "311", name: "Information and Coding"}, {time: 10, day: "Thursday", room: "311", name: "Information and Coding"},
                              {time: 11, day: "Thursday", room: "311", name: "Robotics"}, {time: 12, day: "Thursday", room: "311", name: "Robotics"},
                              {time: 14, day: "Thursday", room: "311", name: "Operations Research"}, {time: 15, day: "Thursday", room: "311", name: "Operations Research"},
                              {time: 9, day: "Friday", room: "311", name: "Computer Vision"}, {time: 10, day: "Friday", room: "311", name: "Computer Vison"},
                              {time: 11, day: "Friday", room: "311", name: "Simulation and Modelling"}, {time: 12, day: "Friday", room: "311", name: "Simulation and Modelling"},
                              {time: 14, day: "Friday", room: "311", name: "Type Systems"}, {time: 15, day: "Friday", room: "311", name: "Type Systems"},
                              {time: 16, day: "Friday", room: "311", name: "Advanced Databases"}, , {time: 17, day: "Friday", room: "311", name: "Advanced Databases"}]};
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
