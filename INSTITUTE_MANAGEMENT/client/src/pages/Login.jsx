import React from 'react'
import "../style.css"

export default function Login() {
    return (
        <div>
            <div className="container-fluid">


                <div className="row bg-image login-image">
                    <div className=" row bg-trans-yellow">

                        <div className="col-md-8 ">

                            <div className="pic-body">
                                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                                <div className="topic">
                                    Make a <span className="blue"> difference </span>
                                </div>
                                <div className="pic-text">
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores tempora ea ipsam. Nostrum, ut libero! Quisquam modi ducimus beatae praesentium perferendis obcaecati maiores nisi suscipit, consequuntur animi quos impedit neque!
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-4 login-sec">
                            <div style={{height: '11vh'}}> </div>
                            <div className="card login-card">
                                <span className=" card-body">
                                    <br /><br />
                                    <span className=" card-title">
                                        Log In
                                    </span>
                                    <br /><br />
                                    <span className="card-text">
                                        <form className="" action="" method="post">


                                            <div className="form group">
                                                <label for="" > Email address </label>
                                                <input type="username" className="form-control" placeholder="name@gmail.com"/>

                                            </div>
                                            <div className="form group">
                                                <label for="" > Password </label>
                                                <input type="password" className="form-control" />

                                            </div>
                                            <a href=""> Forgot Password</a>
                                            <br /> <br />
                                            <input type="submit" value="Login" className="btn btn-curved" role="button" style={{width: '100%'}} />

                                                <br /> <br />

                                                <h6 style={{textalign: 'center'}} >
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <hr style={{width: '100%'}}/>
                                                        </div>
                                                        <div className="col-4">
                                                            or
                                                        </div>
                                                        <div className="col-4">
                                                            <hr style={{width: '100%'}}/>
                                                        </div>
                                                    </div>
                                                </h6>


                                                <div className="btn btn-curved-out" style={{width: '100%'}} > Apply Now</div>
                                        </form>
                                    </span>
                                </span>
                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
