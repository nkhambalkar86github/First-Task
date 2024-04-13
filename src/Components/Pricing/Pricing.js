import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className='container pt-5 align-items-center  pb-5'>
        <div className='row'>
          <h1 className='text-center  mb-5' style={{ color: "#5C27C0" }}><span style={{ fontWeight: "bold" }}>Choose Your Simple,</span >Transparent Pricing</h1>
          <div className='col-lg-4 col-sm-12 mb-4 pt-4'>
            <div className='card pb-3 rounded-3' style={{ boxShadow: "5px 5px 20px gray", backgroundColor: 'white' }}>
              <div className='card-body mt-3'>
                <h4 className=' text-center  mb-3' style={{ color: "#5C27C0" }}>1 Month</h4>
                <h1 className=' text-center mb-5 '><del>&#2352;</del>199.00<span style={{ fontSize: "1rem" }}>/month</span></h1>
                <h5 className=' text-center mb-4' style={{ color: "#5C27C0" }}>Suitable for companies with 5-10 openings</h5>
                <div className='mb-5' style={{ lineHeight: "20px",textAlign:"-webkit-left" }}>

                  <p><img className="icons6" alt="" src="/iconsright.svg" />  10 interview-ready candidates</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  Unlimited job position</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  Receive pre-vetted profiles within 48 hours</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  Dedicated acount manager</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  Assistance with interview scheduling</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  custome response</p>
                </div>

                <button className='mt-4 btn text-light rounded-3 w-100 p-3'
                  style={{ boxShadow: "10px 10px 20px #5C27C0", backgroundColor: '#5C27C0' }}>Get Started</button>

              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 mb-4  pt-4'>
            <div className='card pb-3 rounded-3' style={{ boxShadow: "5px 5px 20px gray", backgroundColor: '#5C27C0' }}>
              <div className='card-header' style={{ backgroundColor: "orange", width: "130px", position: 'absolute', right: '0' }}>Most Popular</div>
              <div className='card-body mt-3'>

                <h4 className=' text-center text-white mb-3'>3 Months</h4>
                <h1 className=' text-center mb-5 text-white '><del>&#2352;</del>149.00<span style={{ fontSize: "1rem" }}>/month</span></h1>
                <h5 className=' text-center text-white mb-4'>Suitable for companies with 5-10 openings</h5>
                <div className='mb-5 text-white' style={{ lineHeight: "20px",textAlign:"-webkit-left" }}>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  10 interview-ready candidates</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  Unlimited job position</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  Receive pre-vetted profiles within 48 hours</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  Dedicated acount manager</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  Assistance with interview scheduling</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />  custome response</p>
                </div>

                <button className='mt-4 btn  rounded-3 bg-white w-100 p-3' style={{ color: "#5C27C0" }}
                >Get Started</button>

              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 mb-4  pt-4'>
            <div className='card pb-3 rounded-3' style={{ boxShadow: "5px 5px 20px gray", backgroundColor: 'white' }}>
              <div className='card-body mt-3'>
                <h4 className=' text-center  mb-3' style={{ color: "#5C27C0" }}>6 Months</h4>
                <h1 className=' text-center mb-5 '><del>&#2352;</del>169.00<span style={{ fontSize: "1rem" }}>/month</span></h1>
                <h5 className=' text-center mb-4' style={{ color: "#5C27C0" }}>Suitable for companies with 5-10 openings</h5>
                <div className='mb-5' style={{ lineHeight: "20px",textAlign:"-webkit-left" }}>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />   10 interview-ready candidates</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />  Unlimited job position</p>
                  <p><img className="icons6" alt="" src="/iconsright.svg" />   Receive pre-vetted profiles within 48 hours</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />   Dedicated acount manager</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />   Assistance with interview scheduling</p>
                  <p><img className="icons6" alt="" src="/icons.svg" />   custome response</p>
                </div>

                <button className='mt-4 btn text-light rounded-3 w-100 p-3'
                  style={{ boxShadow: "10px 10px 20px #5C27C0", backgroundColor: '#5C27C0' }}>Get Started</button>

              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
