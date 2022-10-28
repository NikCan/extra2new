//универсальная кнопка
type ButtonPropsType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonPropsType) => {
    const {name, callBack} = props //чтобы не использовать "props"
    const onclickHandler = () => {
        callBack()
    }
    return (
        <>
            <button onClick={onclickHandler}>{name}</button>
        </>
    )
}