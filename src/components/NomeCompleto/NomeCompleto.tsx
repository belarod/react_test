type NomeCompletoProps = {
    firstName : string,
    lastName : string
}

export function NomeCompleto(props : NomeCompletoProps){
    return <p style={{ color: 'coral', fontSize: '24px' }}>{props.firstName} {props.lastName}</p>
}