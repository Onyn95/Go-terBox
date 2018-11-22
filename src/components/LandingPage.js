import React from "react";
import logo from "../img/logo.png";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="center mainTitle">Mon goûter</h1>

                <div className="blackMask">
                    <p>Mon goûter c'est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor purus, ornare nec sapien non, mollis vestibulum lectus. </p>
                    <p>Integer porta gravida mauris, vitae venenatis ligula maximus quis. Morbi condimentum condimentum augue, sit amet ultricies nisi convallis sit amet. Curabitur tempus gravida dolor. Curabitur ut eleifend metus.</p>
                </div>
            </div>
        )
    };
}

export default LandingPage;