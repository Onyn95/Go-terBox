import React from 'react';


class CreateUser extends React.Component {

    render () {
        const style = {
           marginTop:"20px"
        }   
          
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="card" id="1" ref={div => { this.idDiv = div }}>
                            <img className="card-img-top" src="" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Kevin</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <form style={style}>

                        <div className="form-group row">
                            <label className="custom-file">
                                <input type="file" id="file" className="custom-file-input" />
                                <span className="custom-file-control"></span>
                            </label>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
                        </div>
                    </form>
                </div>
            
         </div>   

        );
    }
}
export default CreateUser;