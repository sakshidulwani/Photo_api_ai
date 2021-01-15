import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const { image, setImage } = useState('');

  const handleChange = () => {
    axios.get("https://api.generated.photos/api/v1/faces?api_key=iGKtGOOWlTm-DUpR2bXh_w")
  }

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
