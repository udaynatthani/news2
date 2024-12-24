import React, { useState } from 'react';
import Navbar from './Components/navbar';
import Newsboard from './Components/Newsboard';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;
