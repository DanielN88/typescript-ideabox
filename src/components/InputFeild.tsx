import React from 'react'
import './styles.css'

const InputFeild = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a Task' className='input-box'></input>
      <button className="input-submit" type='submit'></button>
    </form>
  )
}

export default InputFeild 