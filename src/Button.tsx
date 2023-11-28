import {CalculatorButtonType} from "./Buttons";



export function Button(props: CalculatorButtonType) {
    return (
        <div className={'btn ' + props.className} key={props.id} id={props.id} >
           {props.name}
        </div>
    )
}