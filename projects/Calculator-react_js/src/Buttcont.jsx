
import styles from './Buttcont.module.css'
const Buttcont=()=>{




      const buttnames = ['/','*','-','7','8','9','4','5','6','1','2','3','0','.','+','-',]
      const handle=()=>{

            console.log(`clicked ${names}`);
      };
      return <div className={styles.button_c}>
            {buttnames.map((names)=>       <button onClick={()=>handle()} className={styles.butt}>{names}</button> )}
    
      </div>}

export default Buttcont;