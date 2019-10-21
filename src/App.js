import React from 'react'
import logo from './logo.svg'
import './App.css'
import data from './characterdata'
function App() {
  const dropdownnames = data.map(({ name }) => name).sort()

  const Select = ({ id }) => {
    return (
      <>
        <div data-id={id} className="nes-select">
          <select id="default_select" className="select">
            {dropdownnames.map(name => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
      </>
    )
  }

  const checknames = () => {
    const dropdowns = document.getElementsByClassName('select')
    let count = 0
    Array.from(dropdowns).map((select, i) => {
      console.log(data[i])
      if (data[i].name === select.value) {
        count++
      }
    })
    alert(`You got ${count} Correct`)
  }

  const Characters = ({ image, num }) => (
    <div
      id={`character${num}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        margin: '20px auto',
      }}
    >
      <img src={image} style={{ width: '150px', margin: '10px' }} />
      <Select id={num} />
    </div>
  )

  return (
    <div className="App">
      <div>
        {data.map(({ image }, i) => (
          <Characters key={i} image={image} num={i} />
        ))}
      </div>
      <button
        onClick={e => checknames(e)}
        className="nes-btn is-primary"
        style={{ padding: '10px' }}
      >
        Done
      </button>
    </div>
  )
}

export default App
