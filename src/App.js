import React from 'react';
import DraggableImages from './components/DraggableImages';
import './App.css';

const getItems = count =>
  Array.from({ length: count }, (i, j) => j).map(j => (
    "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg"
  ));

function App() {
  return (
    <div className="App">
      <DraggableImages images={getItems(10)} title="Image Gallery" />
    </div>
  );
}

export default App;
