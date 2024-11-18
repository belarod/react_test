type TextProps = {
    children : React.ReactNode
}

export function Text(props : TextProps){
    return <p className="text-amber-500">{props.children}</p> //Besteira vira o children, veio lá do App.tsx
}