import React from 'react';
import './App.css';
import { ArrayPhotos } from './components/pages/ArrayPhotos';
// import { ArrayState } from './components/pages/ArrayState';
// import { ObjState } from './components/pages/ObjState';

function App() {
  console.log('Appコンポ最初');
  return (
    <div className="App">
      {/* <h1>Appコンポーネント</h1> */}
      {/* <ObjState /> */}
      {/* <ArrayState /> */}
      <ArrayPhotos />
    </div>
  );
}

export default App;
