import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Create form</h1>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="number" placeholder='Mobile'/>
        <input type="url" placeholder='Image'/>
      </form>
    </div>
  )
}

export default Form
