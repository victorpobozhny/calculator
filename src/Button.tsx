type CalculatorButtonType = {
    id: string
    name: string
    className: string
    onClick: (id: string)=>void
}


export function Button(props: CalculatorButtonType) {
    const onClickHandler = () => {
        props.onClick(props.id)
    }

    return (
        <div className={'btn ' + props.className} id={props.id} onClick={onClickHandler}>
           {props.name}
        </div>
    )
}