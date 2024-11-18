import { addition } from "../../basicMath";
import { subtraction } from "../../basicMath";

export function ShowMathA(){
    return <h1>{numA} {numB}</h1>
}
const  numA = addition(1, 2);
const  numB = subtraction(3, 4);