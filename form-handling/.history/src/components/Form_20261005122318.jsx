

const Form = () => {

    const
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="name" />
      <input  type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button>Submit</button>
    </div>
  );
};

export default Form;
