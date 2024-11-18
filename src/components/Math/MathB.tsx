import { multiplication } from "../../basicMath";
import { division } from "../../basicMath";

export function ShowMathB(){
    return <h1>{numA} {numB}</h1>
}
const  numA = multiplication(1, 2);
const  numB = division(3, 4);