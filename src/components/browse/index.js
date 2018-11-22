import React from 'react';
import unknown from '../../img/person-profile.png';

class Browse extends React.Component {

    handleClick = event => {
        event.preventDefault();
        console.log(this.idDiv.id);
        const id = this.idDiv.id;
        console.log(id);
        //change url
        window.location= "/my-account"
        //this.props.history.push(`/landing`)
        //window.location = "";
    };


    render() {
        return (
            //<div className="container">
                <div className="row justify-content-center">

                    <div className="col-sm-4 col-md-3 col-lg-3 col-xs-12 card" id="1" onClick={e => this.handleClick(e)} ref={div => {this.idDiv=div}}>
                        <img className="card-img-top" src={unknown} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Kevin</h5>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3 col-xs-12 card" id="1" onClick={e => this.handleClick(e)} ref={div => {this.idDiv=div}}>
                        <img className="card-img-top" src={unknown} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Kevin</h5>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3 col-xs-12 card" id="1" onClick={e => this.handleClick(e)} ref={div => {this.idDiv=div}}>
                        <img className="card-img-top" src={unknown} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Kevin</h5>
                        </div>
                    </div>
                    </div>

           // </div>
        )
    };

}


export default Browse;