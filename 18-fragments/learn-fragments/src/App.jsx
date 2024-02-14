// Fragments - The export item should be in the single single component ,
// So to make it like that we were using the another div and used to wrap all the elements in that div by this the html div takes some VideoColorSpaceso 
 // so fragments come to play 

// syntax - <React.Fragment> elements </React.Fragment>
//                                   or 
//                     <>         Elements       </>
import 'bootstrap/dist/css/bootstrap.min.css';
import FOODITEM from './Components/fooditems';
import Error from './Components/ERROR';
// function App(){
//   return <ul class="list-group">
//   <li class="list-group-item">An item</li>
//   <li class="list-group-item">A second item</li>
//   <li class="list-group-item">A third item</li>
//   <li class="list-group-item">A fourth item</li>
//   <li class="list-group-item">And a fifth one</li>
// </ul>

// }
// export default App;

//Maping 
function App(){
 
  return ( <>
    <Error/>
    <FOODITEM/></>

  )
}
export default App;
