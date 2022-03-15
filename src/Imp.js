// import React from "react";

// import { data } from "./New";
// function Imp() {
//   return (
//     <div>
//       {data.map((e) => (
//         <div className="container d-flex box shadow 1px">
//           <div className="">
//             <h3>{e.id}</h3>
//             <h3>{e.email}</h3>
//             <h3>{e.first_name}</h3>
//             <h3>{e.last_name}</h3>
//           </div>
//           <div className="">
//             <img src={e.avatar} alt="" width={"60px"} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Imp;
// import React from "react";
// function Abc() {
//   return <h1> hello data from abc component</h1>;
// }
// function Imp() {
//   return (
//     <div>
//       <h1>hello from Imp componet </h1>
//       <Abc />
//     </div>
//   );
// }
// export default Imp;
// import React from "react";

// function Imp(props) {
//   return (
//     <div>
//       <h1>hello</h1>
//       <h1>i have {props.color} car </h1>
//     </div>
//   );
// }

// export default Imp;
// import React, { Component } from "react";
// export class Imp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: "BMW",
//       color: "red",
//       year: 1995,
//     };
//   }
//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>
//           i have {this.state.model} class {this.state.color} {this.state.year}
//         </h1>
//         <button onClick={this.changeColor}>change</button>
//       </div>
//     );
//   }
// }
// export default Imp;
// import React, { Component } from "react";

// export default class Imp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { brand: "BMW", color: "red", year: 1995 };
//   }
//   changeColor = () => {
//     this.setState({ color: "black" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>i have {this.state.color} car</h1>
//         <button onClick={this.changeColor}>change</button>
//       </div>
//     );
//   }
// }
// import React from "react";
// import "./abc.css";
// import img21 from "./Rohi/img21.jpg";
// function Imp() {
//   return (
//     <div className="main">
//       <h1>hello rohini</h1>
//       <h2>showing images colorful images </h2>
//       <img src={img21} alt="" width={"50%"} />
//     </div>
//   );
// }

// export default Imp;
// import React from "react";
// import { useState } from "react";
// function Imp() {
//   const [name, setname] = useState("");
//   const handleSubmit = (event) => {
//     alert(`you have enterd value : ${name}`);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setname(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

// export default Imp;
// import React from "react";
// import { useState, useRef, useEffect } from "react";
// function Imp() {
//   const [inputvalue, setinputvalue] = useState("");
//   const previousvalue = useRef("");
//   useEffect(() => {
//     previousvalue.current = inputvalue;
//   }, [inputvalue]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputvalue}
//         onChange={(e) => setinputvalue(e.target.value)}
//       />
//       <h1>current value:{inputvalue}</h1>
//       <h1>previousvalue:{previousvalue.current}</h1>
//     </div>
//   );
// }

// export default Imp;
// import React from "react";
// import { useState, useEffect } from "react";
// function Imp() {
//   const [count, setcount] = useState(0);
//   const [calculation, setcalculation] = useState("");
//   useEffect(() => {
//     setTimeout(() => {
//       setcalculation(count * 2);
//     }, 2000);
//   }, [count]);

//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <h1>calculation:{calculation}</h1>
//       <button onClick={() => setcount(count + 1)}>click</button>
//     </div>
//   );
// }

// export default Imp;
// import React from "react";
// import { data } from "./Solution";
// function Imp() {
//   return (
//     <div>
//       {data.map((e) => (
//         <div className="container d-flex box shadow 1px">
//           <h1>{e.id}</h1>
//           <h1>{e.email}</h1>
//           <h1>{e.first_name}</h1>
//           <h1>{e.last_name}</h1>
//           <div className="">
//             <img src={e.avatar} alt="" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Imp;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// function Imp() {
//   const count = useSelector((state) => state.changenumber);
//   const dispatch = useDispatch();
//   return (
//     <div className="container ">
//       <h1>{count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
//     </div>
//   );
// }

// export default Imp;
