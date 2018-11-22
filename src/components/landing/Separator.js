import React from "react";

class Separator extends React.Component {
    render() {
        const number = Math.floor(Math.random() * 6);
        const separatorClass = "separator separator_" + number;
        return (
            <div className={separatorClass} />
        );
    }
}

export default Separator;