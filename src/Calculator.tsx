import {Screen} from "./Screen";
import {Buttons} from "./Buttons";



export function Calculator() {

    return (
        <div className={'calculatorWrapper'}>
            <Screen/>
            <Buttons/>
        </div>
    )
}