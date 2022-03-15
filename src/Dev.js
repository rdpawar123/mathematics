// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [click, setclick] = useState(0);
//   return (
//     <div>
//       <h1>you have clicked me :{click}</h1>
//       <button onClick={() => setclick(click + 1)}>click me</button>
//     </div>
//   );
// }

// export default Dev;

// import React from "react";

// function Dev() {
//   const repo = ["cat", "dog", "sheep", "docky", "lion"];
//   return (
//     <div>
//       {repo.map((item) => (
//         <ul>
//           <li>{item}</li>
//         </ul>
//       ))}
//     </div>
//   );
// }

// export default Dev;
// import React, { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import "./abc.css";
// function Dev() {
//   const [repo, setrepo] = useState([]);

//   const getrepo = () => {
//     axios.get("https://reqres.in/api/users?page=2").then((Response) => {
//       const myrepo = Response.data.data;
//       setrepo(myrepo);
//     });
//   };
//   useEffect(() => getrepo(), []);
//   return (
//     <>
//       {repo.map((e) => (
//         <div className="container">
//           <div className="card ">
//             <h3>{e.id}</h3>
//             <h3>{e.email}</h3>
//             <h3>{e.first_name}</h3>
//             <h3>{e.last_name}</h3>
//             <div>
//               <img src={e.avatar} alt="" width={"50px"} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Dev;
// import React from "react";

// import { useState } from "react";
// function Dev() {
//   const List = ["apple", "banana", "mango", "orange", "watermelon"];
//   const [repo, setrepo] = useState([]);
//   const handlechange = (item) => {
//     if (item.target.value === "") setrepo(item);
//     return;
//   };
//   const filtervalue = List.filter(
//     (item) => item.indexOf(item.target.value) !== -1
//   );
//   setrepo(filtervalue);

//   return (
//     <div>
//       <div>
//         <input name="query" type="text" onChange={handlechange} />
//       </div>
//       {repo.map((e) => (
//         <div>{e}</div>
//       ))}
//     </div>
//   );
// }

// export default Dev;

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>;
// }

// function Dev(props) {
//   const xyz = props.isGoal;
//   if (xyz) {
//     return <MadeGoal />;
// //   }
//   return <MissedGoal />;
// }
// export default Dev;
// import React from "react";

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
// }
// export default Goal;

// import React from "react";

// function Dev(props) {
//   const abc = props.cars;
//   return (
//     <div>
//       <h1>array show</h1>
//       {abc.length > 0 && <h1>we have {abc.length} cars </h1>}
//     </div>
//   );
// }

// export default Dev;
// import React from "react";

// function Dev() {
//   const shoot = () => {
//     alert("hello world");
//   };
//   return (
//     <div>
//       <button onClick={shoot}>click</button>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// const shoot = (a) => {
//   alert(a);
// };
// function Dev() {
//   return (
//     <div>
//       <button onClick={() => shoot("hello steve")}>click on</button>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// const shoot = (a, b) => {
//   alert(b.type);
// };
// function Dev() {
//   return (
//     <div>
//       <button onClick={(event) => shoot("hi einstein", event)}>
//         click on this
//       </button>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// function Car(props) {
//   return <h1>I have {props.data}</h1>;
// }
// function Dev() {
//   return (
//     <div>
//       <h1>we are showing our garage</h1>
//       <Car data="AUDI" />
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// function Car(props) {
//   return <h1>i have {props.data.model}</h1>;
// }
// function Dev() {
//   const carinfo = { name: "audi", model: "BMW" };
//   return (
//     <div>
//       <h1>I have car collection</h1>
//       <Car data={carinfo} />
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h1>hello i have {this.state.color}</h1>;
//   }
// }
// export default Car;
// import React from "react";
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       model: "BMW",
//       year: 1998,
//       color: "red",
//     };
//   }
//   changecolor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     return (
//       <>
//         <h1>which is car {this.state.model}</h1>
//         <h1>this is {this.state.color}</h1>
//         <button onClick={this.changecolor}>changecolor</button>
//       </>
//     );
//   }
// }
// export default Car;
// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [car, setcar] = useState({
//     color: "red",
//     model: "BMW",
//     brand: "ford",
//   });
//   const changecolor = () => {
//     setcar((previousState) => {
//       return { ...previousState, color: "blue" };
//     });
//   };
//   return (
//     <>
//       <h1>it is {car.model}</h1>
//       <h1>where {car.color}</h1>
//       <button onClick={changecolor}>click</button>
//     </>
//   );
// }

// export default Dev;

// import React from "react";
// import { useState, useEffect } from "react";
// function Dev() {
//   const [count, setcount] = useState(0);
//   const [calculation, setcalculation] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setcalculation(() => count * 2);
//     }, 1000);
//   }, [count]);

//   return (
//     <div>
//       <h1>count:{count}</h1>

//       <button onClick={() => setcount(count + 1)}>click</button>
//       <h1>calculation:{calculation}</h1>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// import { useState, useEffect } from "react";
// function Dev() {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setcount(() => count + 1);
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <h1>I have rendered {count} times</h1>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favouritecolor: "red" };
//   }
//   changecolor = () => {
//     this.setState({ favouritecolor: "blue" });
//   };
//   render() {
//     return (
//       <>
//         <h1>my car color is {this.state.favouritecolor}</h1>
//         <button onClick={this.changecolor}>change</button>
//       </>
//     );
//   }
// }

// export default App;
// import { useState, useEffect, useRef } from "react";
// import react from "react";
// function Dev() {
//   const [inputvalue, setinputvalue] = useState("");
//   const previousinputvalue = useRef("");
//   useEffect(() => {
//     previousinputvalue.current = inputvalue;
//   }, [inputvalue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputvalue}
//         onChange={(e) => setinputvalue(e.target.value)}
//       />
//       <h1>current:{inputvalue}</h1>
//       <h1>previousinputvalue:{previousinputvalue.current}</h1>
//     </>
//   );
// }
// export default Dev;
// import React, { useState } from "react";

// function Dev() {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Inc</button>
//       <button onClick={() => setcount(count - 1)}>dnc</button>
//     </div>
//   );
// }
// export default Dev;

// import axios from "axios";
// import React from "react";
// import { useEffect, useState } from "react";
// function Dev() {
//   const [repo, setrepo] = useState([]);
//   const getrepo = () => {
//     axios.get("https://reqres.in/api/users?page=2").then((Response) => {
//       console.log(Response);
//       const myrepo = Response.data.data;
//       setrepo(myrepo);
//     });
//   };
//   useEffect(() => getrepo(), []);
//   return (
//     <div>
//       {repo.map((e) => (
//         <div className="container d-flex box shadow 1px">
//           <div className="">
//             <h1>{e.id}</h1>
//             <h1>{e.email}</h1>
//             <h1>{e.first_name}</h1>
//             <h1>{e.last_name}</h1>
//           </div>
//           <div>
//             <img src={e.avatar} alt="" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Dev;
// import React from "react";

// function Dev(props) {
//   const cars = props.cars;
//   return (
//     <div>
//       <h1>Dev</h1>
//       {cars.length > 0 && <h1>i have {cars.length}</h1>}
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [name, setname] = useState("");
//   const handleSubmit = (event) => {
//     // e.PreventDefault();
//     // alert(`the value you have entered is :${name}`);

//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your Name:
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

// export default Dev;
// import React from "react";
// import { useState, useEffect } from "react";
// function Dev() {
//   const [count, setcount] = useState(0);
//   const [calculation, setcalculation] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setcalculation(() => count * 2);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={() => setcount(count + 1)}>+</button>
//       <h1>calculation:{calculation}</h1>
//     </div>
//   );
// }

// export default Dev;

// import React from "react";
// import { useState, useEffect } from "react";
// function Dev() {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setcount(count + 1);
//     }, 1000);
//   }, [count]);
//   return (
//     <div>
//       <h1>count:{count}</h1>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [name, setname] = useState("");
//   const handleSubmit = (event) => {
//     alert(`entered value is:${name}`);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         enter text :
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

// export default Dev;
// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// function Dev() {
//   const [repo, setrepo] = useState([]);
//   const getrepo = () => {
//     axios.get("https://fakestoreapi.com/products").then((Response) => {
//       console.log(Response);
//       const myrepo = Response.data;
//       setrepo(myrepo);
//     });
//   };
//   useEffect(() => getrepo(), []);
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>id</th>
//           <th>price</th>
//           <th>category</th>
//           <th>image</th>
//         </tr>
//         <tbody>
//           {repo.map((e) => (
//             <tr>
//               <td>{e.id}</td>
//               <td>{e.price}</td>
//               <td>{e.category}</td>
//               <td>
//                 <img src={e.image} alt="" width={"50px"} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";

// function Dev(props) {
//   const cars = props.cars;
//   return (
//     <div>
//       {cars.length > 0 && <h1>hello i have </h1>}
//       <h1>i have {cars.length}</h1>
//     </div>
//   );
// }

// export default Dev;
// import React, { Component } from "react";

// export class Dev extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       color: "red",
//       brand: "tayata",
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
//           hello i have {this.state.color} and {this.state.brand} and
//           {this.state.year}{" "}
//         </h1>
//         <button onClick={this.changeColor}>click</button>
//       </div>
//     );
//   }
// }

// export default Dev;
// import React from "react";
// import { useState, useEffect, useRef } from "react";
// function Dev() {
//   const [inputvalue, setinputvalue] = useState("");
//   const previousinputvalue = useRef("");
//   useEffect(() => {
//     previousinputvalue.current = inputvalue;
//   }, [inputvalue]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputvalue}
//         onChange={(e) => setinputvalue(e.target.value)}
//       />
//       <h1>current :{inputvalue}</h1>
//       <h1>previousinputvalue:{previousinputvalue.current}</h1>
//     </div>
//   );
// }

// export default Dev;

// import React from "react";
// import "./xyz.css";
// function Dev() {
//   const handleSubmit = (a, b, c) => {
//     alert(a);
//     alert(b);
//     alert(c);
//   };
//   return (
//     <div className="abc">
//       <button onClick={() => handleSubmit("this is button1")}>BUTTON1</button>
//       <button onClick={() => handleSubmit("this is button2")}>BUTTON2</button>
//       <button onClick={() => handleSubmit("this is button3")}>BUTTON3</button>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>you have clicked {count} times</h1>
//       <button onClick={() => setcount(count + 1)}>click me</button>
//     </div>
//   );
// }

// export default Dev;
// import React from "react";
// import { useState } from "react";
// function Dev() {
//   const [first, setfirst] = useState("");
//   const [last, setlast] = useState("");
//   const handleSubmit = () => {
//     alert(`hello :${first} ${last}`);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={first}
//         onChange={(e) => setfirst(e.target.value)}
//       />
//       <input
//         type="text"
//         value={last}
//         onChange={(e) => setlast(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Greet Me</button>
//     </div>
//   );
// }

// export default Dev;
