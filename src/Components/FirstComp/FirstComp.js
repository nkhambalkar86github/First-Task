
const FirstComp = () => {
    return (
        <div className="container" style={{backgroundColor:"#F6F6F6",position:'relative'}}>
            <div className="row">
                <div className="col-6 ">
                    <div className="mt-5">
                        <h1 style={{ color: '#5C27C0' }}><span style={{ fontWeight: 'bold' }}>Power Up Your Hiring</span><br />
                            with Rework .</h1>

                        <p>Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier<br /> talent connections. Rework is your strategic partner in redefining how you hire </p>
                    </div>

                    <div className="mb-4">
                    <button className="rounded-3 mt-3" style={{ width: "170px", height: "44px", backgroundColor: "#5C27C0", color: "#FFFFFF",border:"none" }}>Book A Demo</button>

                    </div>

                    <div>
                    <p style={{color:"#5C27C0"}}><img src="./rightBlue.png" alt="..."></img> No credit Required</p>
                    <p style={{color:"#5C27C0"}}><img src="./rightBlue.png" alt="..."></img> Streamlined Recruitment Process</p>


                    </div>
                </div>

                <div className="col-6">

                    <div>
                        <img src="./Groupimg.png" alt="..." style={{ width: '100%' }}></img>
                        <img src="./Group2.png" alt="..." style={{ width: '30%',position:"relative" ,bottom:'80px',left:"80px"}}></img>

                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default FirstComp;