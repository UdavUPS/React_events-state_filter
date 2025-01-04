import { items } from './object.js';
import { Filter } from './Filter.jsx';
import { Portfolio } from './Portfolio.jsx';




function App() {

  const xa = (e) => {
    if (e.target.textContent !== "AllWebsitesFlayersBusiness Cards") {

      let carts = document.querySelector('.contend').childNodes;
      let selected = e.target.textContent;



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
