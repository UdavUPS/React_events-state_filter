import { items } from './object.js';
import { Filter } from './Filter.jsx';
import { Portfolio } from './Portfolio.jsx';
import { useState } from 'react';




function App() {
  let [cat, setCat] = useState("All");

  const xa = (e) => {
    if (e.target.textContent !== "AllWebsitesFlayersBusiness Cards") {

      let carts = document.querySelector('.contend').childNodes;
      setCat(e.target.textContent);
      let selected = e.target.textContent;
      console.log(selected);



      carts.forEach (e => {
        if (e.getAttribute('category') !== selected) {
          e.classList.add("showOff");
        } else {
          e.classList.remove("showOff");
        }
        if (selected === "All") {e.classList.remove("showOff");}
      })
    }
    
    
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
      <Portfolio items = {items}/>
      </div>
    </div>
  );
}



export default App;
