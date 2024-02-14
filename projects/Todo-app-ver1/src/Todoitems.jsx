import Appdata from "./Appdata";

const Todoitems=({itemobj})=>{
      return  (
     <div class="row ak-row">
      <div class="col-6 ak-contain">{itemobj}</div>
      <div class="col-4 ak-contain">{itemobj}</div>
      <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
      </div>
      )
      
}
export default Todoitems;