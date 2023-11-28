import {ScreenSymbol} from "./ScreenSymbol";

type ScreenType = {
    data: string
}

export function Screen (props: ScreenType) {
    return (
        <div className={'screenWrapper'}>
            <ScreenSymbol data={props.data} />
        </div>
    )
}