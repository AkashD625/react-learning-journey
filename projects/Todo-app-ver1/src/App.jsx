import Appdata from "./Appdata"
import Apphead from "./Apphead"
import Appinpu from "./Appinpu"
import Todoitems from "./Todoitems";


import './App.css';
import Todoitems from "./Todoitems";

function App() {
const itemobj=[{
  name:'GEt works done',
  duedate:'2/2/2'
},

{
  name:'Do all the home work',
  duedate:'22/2/2'
},
]

  return <div> <Apphead/>
<div class="container text-center main-ak" >
  
<Appinpu/>
<Todoitems/>

  
</div>
  </div>
}

export default App
