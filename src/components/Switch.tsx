import { useState } from "react";
import "../css/Switch.scss";

interface Props {
    leftTag: string;
    rightTag: string;

    isActivated: boolean;
}

function Switch({ leftTag, rightTag, isActivated }: Props) {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandle = () => {
        setIsChecked(!isChecked);
        isActivated = isChecked;
    };

    return (
        <div className="form-check form-switch d-flex justify-content-center col-12">
            <h4>{leftTag}</h4>
            <input
                className="form-check-input mx-2 mt-2 switch-color"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={isChecked}
                onChange={checkHandle}
            ></input>
            <h4>{rightTag}</h4>
        </div>
    );
}

export default Switch;
