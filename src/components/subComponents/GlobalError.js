import { useError } from "./ErrorProvider"
import {Alert} from "reactstrap";


function GlobalError() {
    const { error, clearError } = useError();

    if (!error) return null;
    const errorMessage = error.message || "An unknown error occurred";

    return (
        <div className="error-message">
            <Alert color="danger" toggle={clearError}>
                {errorMessage}
            </Alert>
        </div>
    );
}

export default GlobalError;