import {useRef} from "react";
import {Badge} from "reactstrap";


function SearchSection(props) {
    const inputRef = useRef(null);

    function handleKeyPress(event) {
        if (event.keyCode === 13) {  // Enter key's keyCode is 13
            inputRef.current.blur();  // Remove focus from input
        }
    }

    return(
        <div className="searchSection">
            <div className="searchBar">
                <input
                    aria-labelledby="search-button"
                    name="search"
                    id="search"
                    type="search"
                    value={props.filter}
                    placeholder="Search here..."
                    onChange={(event) => {
                        props.setFilter(event.target.value);

                    }}
                    onKeyUp={handleKeyPress} // handle key press on key up
                    ref={inputRef} // attach ref to input element
                />
                {props.filter !== "" ?
                    <Badge color="danger" onClick={() => {
                        props.setFilter("")
                    }}>x
                    </Badge>
                    : null}
            </div>

            <p>
                {props.filterTags.map((tag, index) => (
                    <span key={index}>
                        <Badge onClick={() => {
                            props.setFilter(tag)
                        }}>
                            {tag}
                        </Badge>&nbsp;
                    </span>
                ))}
            </p>
        </div>
    );
}

export default SearchSection;