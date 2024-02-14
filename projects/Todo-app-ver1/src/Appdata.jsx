function Appdata({todoitem,tododate}){
     

return 
<div class="row ak-row">
      <div class="col-6 ak-contain">{todoitem}</div>
      <div class="col-4 ak-contain">{tododate}</div>
      <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
      </div>

}
export default Appdata;