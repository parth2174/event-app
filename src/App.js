// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Events from './Events';
// import EventDetail from './EventDetail';
// import './App.css';
// import Routing from './Routing';

// class App extends Component {


//   render () {
//     return (
//       <Home/>
//     )
//   }


//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       startDate: null,
//       endDate: null,
//       list: [],
//     };
//   }



//   componentDidMount() {
//     this.fetchItems();
//   }




// fetchItems = async () => {
//   try {
//     const response = await axios.get('http://13.48.148.123:5000/api/events');
//     this.setState({ list: response.data });
//   } catch (error){
//     console.log(error);
//   }
// }

// updateInput = (value) => {
//   this.setState({
//     userInput: value,
//   });
// };

// handleStartDateChange = (startDate) => {
//   this.setState({
//     startDate: startDate,
//   });
// };

// handleendDateChange = (endDate) => {
//   this.setState({
//     endDate: endDate,
//   });
// };



// isDayDisabled = (date) => {
//   const dayOfWeek = date.getDay();
//   if (dayOfWeek === 3 || dayOfWeek === 5) {
//     //alert('cannot add event')
//     return true;
//   }
  
// };



// addItem = async () => {

//   const { userInput, startDate, endDate } = this.state;


//   if (userInput !== '' && startDate && endDate) {
//     if (this.isDayDisabled(startDate) || this.isDayDisabled(endDate)) {
//       alert('Cannot add an event on this date.');
//       return;
//     }


//   // if (this.state.userInput !== '' && this.state.startDate && this.state.endDate) {
//   //   const startDate = this.state.startDate.toISOString().split('T')[0];
//   //   const endDate = this.state.endDate.toISOString().split('T')[0];

//     // const startDate = new Date(this.state.startDate);
//     // const endDate = new Date(this.state.endDate);

//     // const startDate = this.state.startDate.toLocaleDateString();
//     // const endDate = this.state.endDate.toLocaleDateString();

//     // if (this.isDayDisabled(this.state.startDate) ||this.isDayDisabled(this.state.endDate)) {
//     //   alert('cannot add a event ');
//     //   return false;
//     // }


//     try {

//       const newStartDate = new Date(
//         Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
//       ).toISOString();

//       const newEndDate = new Date(
//         Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
//       ).toISOString();



//        const newItem = {
//         value: this.state.userInput,
//         startDate: newStartDate.split('T')[0],
//         endDate: newEndDate.split('T')[0]
//        };

//        await axios.post('http://13.48.148.123:5000/api/events', newItem);
//        this.fetchItems();

//        this.setState({
//         userInput: '',
//         startDate: null,
//         endDate: null,
//        })
//     } catch (error) {
//       console.log(error);
//     }

//   }
// };



// deleteItem = async (id) => {
//   try {
//      await axios.delete(`http://13.48.148.123:5000/api/events/${id}`);
//      this.fetchItems();
//   } catch (error) {
//     console.log(error);
//   }
// }


// editItem = async (id, newValue) => {
//   try {
//     await axios.put(`http://13.48.148.123:5000/api/events/${id}`, { value: newValue});
//     this.fetchItems();
//   } catch (error) {
//     console.log(error);
//   }


//   // try {
//   //   const updatedItem = {
//   //     value: newValue,
//   //     startDate: newStartDate,
//   //     endDate: newEndDate,
//   //   };

//   //   await axios.put(`/api/items/${id}`, updatedItem);
//   //   this.fetchItems();
//   // } catch (error) {
//   //   console.log(error);
//   // }


// }



// render() {
//   return (
//     <Router>
//       <div className="app-container" >
//         <div className="menu">
//           <li>
//             <Link className="menu-item"  to="/">Home</Link>
//           </li>
//           <li>
//             <Link className="menu-item"  to="/events">Events</Link>
//           </li>

//           </div>
        

//         <hr />

//         <Routes>
//           <Route 
//           path="/"
//           element={
//             <div style={{height: 145}}>
//               <h1 style={{color: "white"}}>Events</h1>
//               <div className="input-container">
//                 <input 
//                 className="input-field"
//                 type="text"
//                 placeholder="Event Title"
//                 value={this.state.userInput}
//                 onChange={(event) => this.updateInput(event.target.value)}
//                 />
//                 <DatePicker 
//                 className="date-picker"
//                 selected={this.state.startDate}
//                 onChange={this.handleStartDateChange}
//                 dateFormat="yyyy-MM-dd"
//                 placeholderText="Select start date"
                
//                 />
//                 <DatePicker
//                 className="date-picker"
//                 selected={this.state.endDate}
//                 onChange={this.handleendDateChange}
//                 dateFormat="yyyy-MM-dd"
//                 placeholderText="Select end date"
                
//                 />
//                 <button className="add-buuton" onClick={this.addItem}>Add</button>
//               </div>
//             </div>
//           }
//           />
//           <Route
//           path="/events"
//           element={<Events  events={this.state.list} deleteItem={this.deleteItem} editItem={this.editItem} />}
//           />

//           <Route
//           path="/events/:id"
//           element={<EventDetail  events={this.state.list} />}
//           />
//         </Routes>
//       </div>
//     </Router>

    
//   )
  
// }




// }
// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Login from "./Login";
import Register from "./Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;