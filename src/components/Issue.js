import { useRouteError } from "react-router-dom";
const Issue=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>something went wrong</h1>
            <h1>{err.status} : {err.statusText}</h1>
        </div>
    );
};
export default Issue;