//1 component inside component in function
// import React from "react";
// function Car(props) {
//   return (
//     <>
//       <h1>I have {props.model} car .</h1>
//       <h1>text from component 1</h1>
//     </>
//   );
// }
// function Section() {
//   return (
//     <div>
//       <h1>text from coomponent 2</h1>
//       <Car model="BMW" />
//     </div>
//   );
// }

// export default Section;

// 2 component in component in class
// import React from "react";
// class Abc extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>text from first class</h1>
//       </>
//     );
//   }
// }
// class Section extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>text from class 2</h1>
//         <Abc />
//       </>
//     );
//   }
// }
// export default Section;

//3 changing state values using setState method in class
// import React from "react";
// class Section extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { color: "red" };
//   }

//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     return (
//       <>
//         <h1>I have {this.state.color} car</h1>
//         <button onClick={this.changeColor}>Click</button>
//       </>
//     );
//   }
// }
// export default Section;

//passing props
// import React from "react";

// function Section(props) {
//   return (
//     <div>
//       <h1>I have {props.cars} </h1>
//     </div>
//   );
// }

// export default Section;

//form data capture
// import React from "react";
// import { useState } from "react";
// function Section() {
//   const [name, setname] = useState("");
//   const handleSubmit = (event) => {
//     alert(`you have entered values:${name}`);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setname(e.target.value)}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default Section;
// import React from "react";
// import { useState, useEffect, useRef } from "react";
// function Section() {
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

// export default Section;

//Api post
// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// function Section() {
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
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>price</td>
//             <td>category</td>
//             <td>Image</td>
//           </tr>
//         </thead>
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

// export default Section;

// api post from db.js file
// import React from "react";
// import { data } from "./Final";
// function Section() {
//   return (
//     <div>
//       {data.map((e) => (
//         <>
//           <div className="container d-flex box shadow 1px">
//             <h1>{e.id}</h1>
//             <h1>{e.email}</h1>
//             <h1>{e.first_name}</h1>
//             <h1>{e.last_name}</h1>

//             <div className="">
//               <img src={e.avatar} alt="" />
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// }

// export default Section;

//simple counter
// import React from "react";
// import { useState } from "react";
// function Section() {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increment</button>
//       <button onClick={() => setcount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default Section;

// setimeout
// import React from "react";
// import { useState, useEffect } from "react";
// function Section() {
//   const [count, setcount] = useState(0);
//   const [calculation, setcalculation] = useState(0);
//   useEffect(() => {
//     setTimeout(() => setcalculation(count * 2), 2000);
//   }, [count]);
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Click</button>
//       <h1>calculation:{calculation}</h1>
//     </div>
//   );
// }

// export default Section;
// import React from "react";

// function Section() {
//   const repo = [2, 4, 44, 33, 21, 22, 60];
//   return (
//     <div>
//       {repo.map((e) => (
//         <div>
//           <ul>
//             <li>{e * 2}</li>
//           </ul>
//         </div>
//       ))}
//       <div>
//         <h1>{repo.filter((e) => e % 2 === 0)}</h1>
//       </div>
//       <div>
//         <h1>
//           {repo.reduce(function (acc, current) {
//             return (acc += current);
//           }, 0)}
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Section;
