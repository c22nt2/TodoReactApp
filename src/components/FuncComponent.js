import React, {Component} from "react";

function Demo1(props) {
  return (
      <div>
         <h1>Hello From function Component</h1>
         <h2>{props.Title}</h2>
      </div>
  );
}

const Demo2 = (props) => {
  return (
     <div>
        <h1>Hello From function Component</h1>
        <h2>{props.Title}</h2>
     </div>
  );
}

const Demo3 = (props) => (
  <div>
     <h1>Hello From function Component</h1>
     <h2>{props.Title}</h2>
  </div>
)

// export default Demo1;
// export default Demo2;
export {
   Demo1, 
   Demo2,
   Demo3
}