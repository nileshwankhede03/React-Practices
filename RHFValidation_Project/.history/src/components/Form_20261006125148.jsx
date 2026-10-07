import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Create form</h1>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="number" placeholder='Number'/>
        <input type="url" placeholder='Url'/>
      </form>
    </div>
  )
}

export default Form
