import {Screen} from "./Screen";
import {Buttons} from "./Buttons";
import {v1} from "uuid";
import {useState} from "react";


export function Calculator() {

    const CalculatorButtons = [
        {id: v1(), name: 'AC', buttonClass: 'logic', className: 'grey'},
        {id: v1(), name: '1', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '4', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '7', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '0', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '+/-', buttonClass: 'logic', className: 'grey'},
        {id: v1(), name: '2', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '5', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '8', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: 'S', buttonClass: 'logic', className: 'dark-grey'},
        {id: v1(), name: '%', buttonClass: 'logic', className: 'grey'},
        {id: v1(), name: '3', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '6', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '9', buttonClass: 'numbers', className: 'dark-grey'},
        {id: v1(), name: '.', buttonClass: 'logic', className: 'dark-grey'},
        {id: v1(), name: '÷', buttonClass: 'logic', className: 'yellow'},
        {id: v1(), name: '*', buttonClass: 'logic', className: 'yellow'},
        {id: v1(), name: '-', buttonClass: 'logic', className: 'yellow'},
        {id: v1(), name: '+', buttonClass: 'logic', className: 'yellow'},
        {id: v1(), name: '=', buttonClass: 'logic', className: 'yellow'},
    ]

    const [state, setState] = useState('')



    const ButtonsOnClickHandler = (id: string, name: string, buttonClass: string) => {

    }
    return (
        <div className={'calculatorWrapper'}>
            <Screen data={state}/>
            <Buttons buttons={CalculatorButtons} onClick={ButtonsOnClickHandler}/>
        </div>
    )
}