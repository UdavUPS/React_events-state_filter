import { items } from './object.js';
import { Filter } from './Filter.jsx';
import { Portfolio } from './Portfolio.jsx';
import { useState } from 'react';




function App() {
  const [filterValue, changeValue] = useState ('All');
 


function setFilterValue(newFilter) {
        changeValue(newFilter);
      }
 

  return (
    <div>
      <div className='filterBox'>
        <Filter  filterName = "All" onClick= {() => setFilterValue("All")} />
        <Filter filterName = "Websites" onClick= {() => setFilterValue("Websites")}/>
        <Filter filterName = "Flayers" onClick= {() => setFilterValue("Flayers")}/>
        <Filter filterName = "Business Cards" onClick= {() => setFilterValue("Business Cards")}/>
      </div>
      <div className="contend">
      <Portfolio items = {items.filter( (elem) => {
        if (filterValue === "All") {
          return elem
        }
          return elem.category === filterValue
      })}/>
      </div>
    </div>
  );
}



export default App;
