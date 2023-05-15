import "./button.scss"

interface Props {
    title: string,
    onClick: () => void,
    width?: string,
    height?: string,
    disabled?: boolean
}
const Button = (props: Props) => {
    const {
        title,
        onClick,
        width,
        height,
        disabled
    } = props

    return (
        <button
            style={{width: width, height: height}}
            className={disabled ? "disabled" : "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    )
}

export default Button
