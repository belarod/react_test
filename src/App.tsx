import "./App.css"
import { HelloWorld } from "./components/HelloWorld/HelloWorld"
import { NomeCompleto } from "./components/NomeCompleto/NomeCompleto";
import { Text } from "./components/Text/Text";
import { getRandomInt } from "./getRandomInteger";
import { ShowMathA } from "./components/Math/MathA";
import { ShowMathB } from "./components/Math/MathB";

const numbers = [1, 2, 3, 4, 5]
const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const num = getRandomInt();

function doubles(){
    return numbers.map((number) => number * 2)
}
console.log(doubles())

function oddNumbers(){
    return moreNumbers.filter((number) => number % 2 !== 0)
}
console.log(oddNumbers())

console.log(ShowMathA())
console.log(ShowMathB())

export default function App(){
  return <div>
    <HelloWorld  />
    <HelloWorld  />
    <HelloWorld  />

    <NomeCompleto firstName="Sara" lastName="Silva"/>

    <Text>Besteira</Text>
    <Text>Golesma</Text>
    <Text>Uaaa</Text>
    <Text>Gol</Text>
    <Text>Bolinha</Text>

    {num}

    <ShowMathA />
    <ShowMathB />
  </div>
}