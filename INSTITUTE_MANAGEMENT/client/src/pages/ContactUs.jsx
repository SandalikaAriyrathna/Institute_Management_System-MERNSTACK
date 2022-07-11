import React from 'react'
import Header from '../components/Header'
import "../style.css"

export default function ContactUs() {
  return (
    <div>
        <Header/>
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
            <div style={{ height: '11vh' }}> </div>
            <div className="card login-card">
                <span className=" card-body">
                    <br /><br />
                    <span className=" card-title">
                        Contact Us
                    </span>
                    <br /><br />
                    <span className="card-text">
                        <form className="" action="" method="post">


                            <div className="form group">
                                <label for="" > Email address </label>
                                <input type="username" className="form-control" placeholder="name@gmail.com" />

                            </div>
                            <div className="form group">
                                <label for="" > What do you like to know from us? </label>
                                <textarea type="password" className="form-control" rows={4} placeholder='Your message.....'/>

                            </div>
                            <br /> 
                            <input type="submit" value="Submit" className="btn btn-curved" role="button" style={{ width: '100%' }} />
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
