type ScreenSymbolPropsType = {
    data: string
}

export function ScreenSymbol (props: ScreenSymbolPropsType) {
    return (
        <div className={'screenSymbol'}>
            {props.data}
        </div>
    )
}