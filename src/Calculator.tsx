import {Screen} from "./Screen";
import {Buttons} from "./Buttons";
import {v1} from "uuid";


export function Calculator() {

    const CalculatorButtons = [
        {id: v1(), name: 'AC', className: 'grey'},
        {id: v1(), name: '1', className: 'dark-grey'},
        {id: v1(), name: '4', className: 'dark-grey'},
        {id: v1(), name: '7', className: 'dark-grey'},
        {id: v1(), name: '0', className: 'dark-grey'},
        {id: v1(), name: '+/-', className: 'grey'},
        {id: v1(), name: '2', className: 'dark-grey'},
        {id: v1(), name: '5', className: 'dark-grey'},
        {id: v1(), name: '8', className: 'dark-grey'},
        {id: v1(), name: 'S', className: 'dark-grey'},
        {id: v1(), name: '%', className: 'grey'},
        {id: v1(), name: '3', className: 'dark-grey'},
        {id: v1(), name: '6', className: 'dark-grey'},
        {id: v1(), name: '9', className: 'dark-grey'},
        {id: v1(), name: '.', className: 'dark-grey'},
        {id: v1(), name: '÷', className: 'yellow'},
        {id: v1(), name: '*', className: 'yellow'},
        {id: v1(), name: '-', className: 'yellow'},
        {id: v1(), name: '+', className: 'yellow'},
        {id: v1(), name: '=', className: 'yellow'},
    ]

    const ButtonsOnClickHandler = (id: string) => {
        console.log(id)
    }

    return (
        <div className={'calculatorWrapper'}>
            <Screen/>
            <Buttons buttons={CalculatorButtons} onClick={ButtonsOnClickHandler}/>
        </div>
    )
}