interface GreetingProps{
    name: string;
}


const  Greeting = ({name}: GreetingProps) =>{
  return <h2>Benvingut/da, {name}</h2>
}


export default Greeting;