import { useState } from 'react'
import './App.css'

const App = () => {
  // State: Store the list of all classes the user added
  const [classes, setClasses] = useState([])
  
  // State: Store what the user typed in the class name input
  const [className, setClassName] = useState('')
  
  // State: Store what time the user picked for the class
  const [classTime, setClassTime] = useState('')
  
  // State: Store which day the user picked (Monday, Tuesday, etc)
  const [classDay, setClassDay] = useState('')

  // Function: This runs when the "Add Class" button is clicked
  const addClassToSchedule = () => {
    // Create a new class object with the user's data
    const newClass = {
      name: className,
      time: classTime,
      day: classDay
    }
    
    // Add the new class to the list (... means copy all old classes, then add this new one)
    setClasses([...classes, newClass])
    
    // Clear all inputs so the form is empty and ready for the next class
    setClassName('')
    setClassTime('')
    setClassDay('')
    
    // Log to console (for debugging - you can see this in F12)
    console.log('Class added!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Schedule Builder</h1>
        
        {/* Input box for class name */}
        <input 
          type="text" 
          placeholder="Class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        {/* Input box for class time */}
        <input 
          type="time"
          value={classTime}
          onChange={(e) => setClassTime(e.target.value)}
        />

        {/* Dropdown to pick the day */}
        <select value={classDay} onChange={(e) => setClassDay(e.target.value)}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>

        {/* Button that runs addClassToSchedule when clicked */}
        <button onClick={addClassToSchedule}>
          Add Class
         
        </button>
        <h2> Your Classes ({classes.length === 0 ? 'No classes added yet' : `${classes.length} class(es)`}) </h2>

      </header>
    </div>
  )
}

export default App
