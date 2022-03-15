// import React from "react";
// import { useState } from "react";

// const First = () => {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increment</button>
//       <button onClick={() => setcount(count - 1)}>decrement</button>
//     </div>
//   );
// };

// export default First;

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const First = () => {
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
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>price</th>
//             <th>category</th>
//             <th>image</th>
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
//     </>
//   );
// };

// export default First;

// import React from "react";

// function Car({ props }) {
//   return <h1>this is {props.brand} car</h1>;
// }

// function First() {
//   return (
//     <div>
//       <h1>data passing through props</h1>
//       <Car brand="black" />
//     </div>
//   );
// }

// export default First;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function First() {
//   const [repo, setrepo] = useState([]);

//   const getrepo = () => {
//     axios.get("http://fakestoreapi.com/products").then((Response) => {
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
//           <th>Id</th>
//           <th>price</th>
//           <th>category</th>
//           <th>Image</th>
//         </tr>
//         <tbody>
//           {repo.map((e) => (
//             <tr>
//               <td> {e.id}</td>
//               <td> {e.price}</td>
//               <td> {e.category}</td>
//               <td>
//                 {" "}
//                 <img src={e.image} alt="" width={"50px"} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default First;

// import React from "react";
// import { useState } from "react";

// function First() {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increment</button>
//       <button onClick={() => setcount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default First;

// import axios from "axios";
// import { useState, useEffect } from "react";

// import React from "react";

// function First() {
//   const [repo, setrepo] = useState([]);

//   const getrepo = () => {
//     axios.get("https://fakestoreapi.com/products").then((Responce) => {
//       console.log(Responce);
//       const myrepo = Responce.data;
//       setrepo(myrepo);
//     });
//   };

//   useEffect(() => getrepo(), []);
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>price</td>
//             <td>category</td>
//             <td>image</td>
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
//     </>
//   );
// }

// export default First;

// import React from "react";
// import { useState } from "react";

// function First() {
//   const [count, setcount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Inc</button>
//       <button onClick={() => setcount(count - 1)}>Inc</button>
//     </div>
//   );
// }

// export default First;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function First() {
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
//     <>
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
//     </>
//   );
// }

// export default First;

import React from "react";
import { useState } from "react";

function First() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Inc</button>
      {/* <button onClick={() => setcount(count - 1)}>dec</button> */}
    </div>
  );
}

export default First;
