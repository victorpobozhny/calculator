import {Button} from "./Button";

type ButtonsPropsType = {
    buttons: Array<{
        id: string
        className: string
        name: string
        buttonClass: string
    }>
    onClick: (id: string, name: string, buttonClass: string) => void
}


export function Buttons(props: ButtonsPropsType) {
    const buttons = props.buttons.map(el => {
        return <Button id={el.id} className={el.className} name={el.name} onClick={props.onClick} key={el.id} buttonClass={el.buttonClass}/>
    })
    return (
        <div className="buttonsWrapper">
            {buttons}
        </div>
    )
}