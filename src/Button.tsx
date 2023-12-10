type CalculatorButtonType = {
    id: string
    name: string
    className: string
    buttonClass: string
    onClick: (id: string, name: string, buttonClass: string)=>void
}

export function Button(props: CalculatorButtonType) {
    const onClickHandler = () => {
        props.onClick(props.id, props.name, props.buttonClass)
        console.log('you clicked ' + props.name + 'from class ' + props.buttonClass)
    }

    return (
        <div className={'btn ' + props.className} id={props.id} onClick={onClickHandler} >
           {props.name}
        </div>
    )
}