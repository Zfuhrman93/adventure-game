import { useState } from 'react'

const Input = (props) => {
  const [ playerAction, setPlayerAction ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    alert("You entered text! It was " + playerAction + "!")
    setPlayerAction("")
  }
  
  return(
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Please enter command here." className="Input" value={playerAction} onChange={(e) => setPlayerAction(e.target.value)}/>
        </form>
      </div>
    </>
  )
}

export default Input