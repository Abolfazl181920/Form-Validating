import React, { useState } from 'react';

// import Form from './Components/Form';

const App = () => {

  const [ login, setLogin ] = useState(false);

  return (
    <div>
      <button className="accept">Login</button>
      {/* <Form /> */}
    </div>
  );
}

export default App;