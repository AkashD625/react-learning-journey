function Randomgen(){
      let number = Math.random()*100;
      return <h2>Your random number generated is {Math.round(number)}</h2>
}
export default Randomgen;