import styles from "./item-prop.module.css";

const Item=({fooditem})=>{
      return (
      
      <li className={styles["ak-code"]}>{fooditem}</li>
      )
}
 export default Item;