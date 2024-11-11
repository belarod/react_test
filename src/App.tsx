import "./App.css"
import Title from "./components/Title"
import Button from "./components/Button"

export default function App(){
  return <div className="bg-lime-900 p-3 ">
    <Title>Title</Title>
    <Button label={"Sou um botão!"}/>
    <Button label={"Sou outro botão!"}/>
    </div>
}