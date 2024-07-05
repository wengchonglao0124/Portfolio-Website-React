
function CodingText(props) {
    return(
        <p className="coding-line">
            {typeof props.commandText !== "undefined" && (
                <span className="command">> {props.commandText} &nbsp;&nbsp;</span>
            )}
                <span className={props.valueTag ? props.valueTag : "normal-line"}>
                    {props.commandValue}
                    <span className={props.specialValueTag}>{props.specialValue}</span>
                </span>

            {props.children}
        </p>
    );
}

export default CodingText;