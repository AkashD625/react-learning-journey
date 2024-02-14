import Item from "./item-prop";

const FOODITEM=()=>{  
      let fooditem=["milk","dal","Sugar","Honey"];
      return (
<>

<ul class="list-group">
{fooditem.map((item)=>(
<Item fooditem={item}/>
      
      
      ))}
 
</ul></>)


}
export default FOODITEM;
