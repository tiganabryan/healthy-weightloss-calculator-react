import React, { useEffect, useState } from 'react'

const Test = () => {

  const [buttonText, setButtonText] = useState('light')
  const [toggle, setToggle] = useState(false)
  const [background, setBackground] = useState('white')

  const buttonStyle = {
    borderWidth: '2px',
    borderColor: toggle ? 'black' : 'grey',
    borderRadius: '13px',
    padding: '7px',
    marginBottom: '1rem'
  }

  useEffect(() => {
    if (!toggle) {
      setButtonText('switch to shadow mode');
      setBackground('white');

    } else {
        setButtonText('switch to light mode');
        setBackground('LightGray');
      }
      
  }, [toggle])
  
  document.body.style.backgroundColor = background
 

  return (
    <div>
      <button id='btn' onClick={() => setToggle(!toggle)} style={buttonStyle}>{buttonText}</button>
    </div>
  )
}

export default Test