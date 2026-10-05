import { useState } from "react";

const Form = () => {
  // brute force
  const [name, setName] = useState("");
  usesta

  return (
    <div>
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <button>Submit</button>
      </div>
      <div>
        <h1>Form Data UI : </h1>
        <p>Name : {} </p>
        <p>Email : {}</p>
      </div>
    </div>
  );
};

export default Form;
