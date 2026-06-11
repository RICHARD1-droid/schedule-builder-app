// Import useState hook from React - this lets us manage component state (data that can change)
import { useState } from 'react'
// Import the CSS file that styles this component
import './App.css'

// Define the App component - this is the main component for the entire application
// A component is a reusable piece of UI that returns JSX (HTML-like syntax)
const App = () => {
  // ===== STATE VARIABLES =====
  // State is data that can change and trigger re-renders when updated
  // useState is a React Hook that returns [currentValue, functionToUpdateValue]
  
  // State: Store the list of all classes the user added
  // Each class is an object with name, time, and day properties
  const [classes, setClasses] = useState([])
  
  // State: Store what the user typed in the class name input field
  // This updates every time the user types in the input
  const [className, setClassName] = useState('')
  
  // State: Store what time the user picked for the class (using the datetime-local input)
  const [classTime, setClassTime] = useState('')
  


  // State: Store which day the user picked (Monday, Tuesday, etc)
  // We set a default value of 'Mondays' so the dropdown always has something selected
  const [classDay, setClassDay] = useState('')

  // ===== EVENT HANDLERS ===== 
  // Function: This runs when the "Add Class" button is clicked
  // It gathers the data from the form inputs and adds a new class to our list
  const addClassToSchedule = () => {
    // Validate: Make sure the user filled in all the required fields
    if (!className || !classTime || !classDay) {
      console.warn('Please fill in all fields before adding a class')
      return
    }

    // Create a new class object with the user's input data
    // This object will be stored in our classes array
    const newClass = {
      name: className,       // The class name from the input
      time: classTime,       // The date/time from the datetime picker
      day: classDay,         // The day selected from the dropdown
    }





    // Add the new class to the list using the spread operator (...)
    // The spread operator (...classes) copies all old classes, then we add the new one
    // This creates a NEW array, which is important for React to detect the change
    setClasses([...classes, newClass])
    
    // Clear all input fields so the form is empty and ready for the next class
    // This improves user experience by making it obvious the class was added
    setClassName('')
    setClassTime('')
    setClassDay('')  // Reset to default day
    
    // Log to console for debugging - open DevTools (F12) and click Console to see this
    console.log('Class added!', newClass)
  }

  return (
    // Main container with the "App" CSS class for styling
    <div className="App">
     
      {/* Header section that contains all the form controls and schedule display */}
      <header className="App-header">
        {/* Title of the application */}
        <h1>Schedule Builder</h1>
        <p>
          <output>
            Build your class schedule by adding classes with their name, time, and day of the week.
          </output>
        </p>
        
        {/* ===== FORM INPUTS ===== */}
        {/* These form inputs collect data from the user that will be stored in state */}
        
        {/* Input box for class name */}
        {/* 
          - type="text" makes this a regular text input
          - placeholder shows gray hint text when input is empty
          - value={className} displays the current state value in the input
          - onChange runs a function every time the user types (e.target.value is the new text)
        */}
        <p>
        <input 
          type="text" 
          placeholder="Class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
</p>
        {/* Input box for class time */}
        {/*
          - type="time" creates a time picker
          - min and max set the earliest and latest times available
          - value={classTime} shows the selected time in the input
          - onChange updates our state when the user changes the selection
        */}
        <p>
        <input 
          id="class-time"
          type="time"
          min="08:00"
          max="20:00"
          value={classTime}
          onChange={(e) => setClassTime(e.target.value)}
        />
        
</p>
        {/* Dropdown menu to pick the day of week */}
        {/*
          - This is a <select> element which creates a dropdown list
          - The user clicks it to see the options and picks one
          - <option> elements are the choices available in the dropdown
          - value={classDay} shows which option is currently selected
          - onChange updates our classDay state when the user picks something
        */}

        <p>
        <select value={classDay} onChange={(e) => setClassDay(e.target.value)}>
          <option value="">Select a day</option> {/* Default option prompting user to select */}
          <option value ="Sundays">Sundays </option>
          <option value="Mondays">Mondays</option>
          <option value="Tuesdays">Tuesdays</option>
          <option value="Wednesdays">Wednesdays</option>
          <option value="Thursdays">Thursdays</option>
          <option value="Fridays">Fridays</option>
          <option value="Saturdays">Saturdays</option>
        </select>
</p>
        {/* Button that runs addClassToSchedule function when the user clicks it */}
        {/*
          - onClick={addClassToSchedule} connects this button to our function
          - When clicked, it will add the class, clear the form, and update the display
        */}
        <button onClick={addClassToSchedule}>
          Add Class
        </button>
<p>
          <button onClick={() => setClasses([])}>
            Clear All Classes
          </button>
          </p>
        {/* ===== SCHEDULE DISPLAY ===== */}
        {/* Heading that shows how many classes have been added */}
        {/*
          - The {...} inside JSX is JavaScript expression syntax
          - classes.length === 0 ? 'No classes added yet' : `${classes.length} class(es)` 
            is a ternary operator: if length is 0, show "No classes added yet", otherwise show count
          - Template literals (backticks and ${}) let us insert variables into strings
        */}
        <h2>
          Your Classes (
          {classes.length === 0 ? 'No classes added yet' : `${classes.length} class(es)`}
          )
        </h2>

        {/* List of all classes the user added */}
        {/*
          - This <p> contains the schedule list (though <p> isn't the best semantic choice here)
          - classes.map() is a JavaScript function that loops through the classes array
          - For each class (c), it returns a <li> (list item) element
          - c.name, c.time, and c.day access properties from each class object
          - key={index} tells React which item is which (helps with performance and updates)
          - Note: Using array index as key isn't ideal for dynamic lists, but works for now
        */}
        <p>
          {classes.map((c, index) => (
            <li key={index}>
              {/* Display: "Class Name - Time on Day" */}
              {/* Example: "Math - 2024-01-15T14:00 on Mondays" */}
              {c.name} - {c.time} on {c.day}
            </li>
          ))}
        </p>

      </header>
    </div>
  )
}
// Export the App component as the default export
// This makes it available to import in other files (like main.tsx)
export default App


