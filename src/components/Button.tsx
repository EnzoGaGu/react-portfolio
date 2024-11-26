interface Props {
    children: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";

    onButtonClick: () => void;
}

function Button({ children, color = "primary", onButtonClick }: Props) {
    const buttonClass = "btn btn-lg btn-" + color;

    return (
        <button type="button" className={buttonClass} onClick={() => onButtonClick()}>
            {children}
        </button>
    );
}

export default Button;
