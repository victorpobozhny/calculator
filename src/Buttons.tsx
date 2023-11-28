import {Button} from "./Button";

type ButtonsPropsType = {
    buttons: Array<{
        id: string
        className: string
        name: string
    }>
    onClick: (id: string) => void
}


export function Buttons(props: ButtonsPropsType) {
    const buttons = props.buttons.map(el => {
        return <Button id={el.id} className={el.className} name={el.name} onClick={props.onClick} key={el.id}/>
    })
    return (
        <div className="buttonsWrapper">
            {buttons}
        </div>
    )
}