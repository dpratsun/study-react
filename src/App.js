import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('');

  return (
    <div className="App">
        <h1>{likes}</h1>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
        <button onClick={() => setLikes(likes + 1)} >Increment</button>
        <button onClick={() => setLikes(likes - 1)} >Decrement</button>
    </div>
  );
}

export default App;
