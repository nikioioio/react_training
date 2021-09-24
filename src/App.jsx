import { useState, useEffect, useRef } from "react";
// Usage
function App() {
  // State value and setter for our example
  const [count, setCount] = useState(0);
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);
  // Display both current and previous count value
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// Hook
function usePrevious(value) {

  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  console.log('Тело', ref.current)
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
    console.log('ЮзЭффкект', ref.current)
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  console.log('Конец', ref.current)
  return ref.current;
}

export default App;