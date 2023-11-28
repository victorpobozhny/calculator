import {findAllByDisplayValue} from "@testing-library/react";
import {Button} from "./Button";

type ButtonsPropsType = {
    buttons: Array<CalculatorButtonType>
}
export type CalculatorButtonType = {
    id: string
    name: string
    className: string
}

export function Buttons (props: ButtonsPropsType) {
    const buttons = props.buttons.map(el=>{
        return <Button id={el.id} className={el.className} name={el.name}/>
    })
    return (
        <div className="buttonsWrapper">
            {buttons}
        </div>
    )
}