import { items } from './object.js';
import { Filter } from './Filter.jsx';
import { Portfolio } from './Portfolio.jsx';
import { useState } from 'react';




function App() {
  let [cat, setCat] = useState("All");

  const xa = (e) => {
    /* console.log(e.target.textContent); */
    setCat(e.target.textContent);
  }

  return (
    <div>
      <div onClick={xa} className='filterBox'>
        <Filter  filterName = "All"  />
        <Filter filterName = "Websites"/>
        <Filter filterName = "Flayers"/>
        <Filter filterName = "Business Cards"/>
      </div>
      <div className="contend">
      <Portfolio items = {items} category = {cat}/>
      </div>
    </div>
  );
}



export default App;
