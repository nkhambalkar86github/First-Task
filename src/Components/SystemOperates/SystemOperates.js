
const SystemOperates = () => {


    return (
        <div className="container mb-5" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="text-center pt-5 pb-4">
                <h1 style={{ color: "#5C27C0", fontWeight: "lighter", font: "Garnett Regular" }}><span style={{ fontWeight: "bold" }}>How Our System</span> Operates</h1>
            </div>

            <div className="row">

                <div className="col" >
                    <div className="m-5" style={{display:'flex'}}>

                        <div className=""style={{backgroundColor:"#FFFFFF"}}>
                            <div className="p-2 m-4">
                            <h6 class="">Upload Documents <img className="rounded corner-image   " src="./Frame1.png" alt="..." /></h6>
                            </div>
                            <div>
                            <p class=" m-4">Shortlist the most qualified candidate<br/> and upload their details for the top<br/> companies</p>

                            </div>
                        </div>


                        <div style={{backgroundColor:"#EFE5FF"}}>
                            <div className="p-2 m-4">
                            <h6 class="">Sign Up </h6>
                            </div>
                            <div>
                            <p class="m-4">Follow the link below to sign up and <br/>get access of the current job postings</p>
                            </div>
                          <div style={{textAlign:'end'}}>
                          <img className="rounded " src="./Frame3.png" alt="..." />

                          </div>
                        </div>


                        <div style={{backgroundColor:"#FFFFFF"}}>
                            <div className="p-2 m-4">
                            <h6 class="me-4">Get Rewards    <img className="rounded " src="./Frame2.png" alt="..." /></h6>
                            </div>
                            <div>
                            <p class="m-4">As soon as the candidate gets<br/> selected you get your benefits</p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="pt-5 text-center pb-4">
                <button className='mt-4 mb-4 item-center' type="submit"
                    style={{ color: "#5C27C0", border: "2px solid #5C27C0", backgroundColor: 'white', padding: "16px, 30px, 16px, 30px", width: "164px", height: "59px", borderRadius: "10px" }}>Get Started</button>


            </div>

        </div>
    )
}
export default SystemOperates;


