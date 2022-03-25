import React, { useState, useEffect } from 'react'

function Touch() {
  let [count, setCount] = useState(0)
  const [type, setType] = useState('type ')
  const [active, setActive] = useState(false)

  function setypeupdate(val) {
    if (val % 2 === 0) {
      setType('Even')
      console.log('even')
    } else {
      setType('Odd')
      console.log('Odd')
    }
  }
  useEffect(() => {
    if (active) {
      console.log(`update ${count}`)
      setypeupdate(count)
      const intervalId = setInterval(() => {
        setCount(count + 1)
      }, 1000)
     
      return () => clearInterval(intervalId)
    }
  }, [count, active])

  function starttimer() {
    setActive(true)
  }
  function pausetimer() {
    setActive(false)
  }

  function resettimer() {
    setCount(0)
  }
  function stoptimer() {
    setActive(false)
    setCount(0)
  }

  return (
    <div className="count-box">
      <h1>this is {count} secs  </h1>
      <h1>{type}</h1>
      <div className='btnbox'> <button className="btn" onClick={() => {starttimer()}}>
        Start timer
      </button>
      <button  className="btn"  onClick={() => {pausetimer()}}> 
       Pause
      </button>
      <button className="btn" onClick={() => { resettimer() }}  >
        Reset
      </button>
      <button  className="btn"  onClick={() => {    stoptimer()  }}>
        Stop
      </button></div>
     
     
    </div>
  )
}

export { Touch }
