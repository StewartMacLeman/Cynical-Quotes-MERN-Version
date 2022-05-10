import React from "react";

const ReloadButton = ({reloadList}) => {
    return (
        <div className="reloadDiv">
            <button onClick={reloadList}>Click to refresh!</button>
        </div>
    )
}

export default ReloadButton;