const TalentAssistements = () => {

    return (
        <div className="container pt-4" style={{backgroundColor:"#F6F6F6"}}>

            <div className="row pt-5">
                <div className="col-lg-8 col-sm-12 mb-4 pt-4" >
                  <div className="pt-3">
                  <h1 style={{ color: "#5C27C0", fontWeight: "lighter" }}><span style={{ fontWeight: "bold" }}>Discover the Future of </span>Talent<br />  Assessment!</h1>
                    <p className="mt-4">Facing challenges in traditional hiring? <br />
                        Uncover the costs, pitfalls, and the game-changing role of Generative AI in<br /> recruitment.</p>

                    <h6 className="mt-4 ">🔍 Inside this Whitepaper:</h6>
                    <p className="pb-5">Manual vs. Machine-based hiring: Costs & Challenges.<br />
                        The truth about "Interview as a Service."<br />
                        Generative AI: The simple explanation. Optimize Your Hiring Process Today!</p>
                  </div>

                    <div clasName="pt-4" >
                    <button className="mt-5" style={{
                        color: "#FFFBFB",
                        backgroundColor: "#5C27C0",
                        width: "60%",
                        height: "70px",
                        padding: "21px, 56px, 21px, 56px",
                        borderRadius: "20px",
                        boxShadow: "#AE5DFF"
                    }}>Download Now for Smarter Recruitment</button>
                    </div>


                </div>

                <div className="col-lg-4 col-sm-12 mb-4">
                    <img src="/rectangle-39394@2x.png" className="rounded img-fluid" alt="talentassist"
                        style={{
                            width: "387px",
                            height: "563px",
                        }} />
                </div>


            </div>

        </div>
    )
}

export default TalentAssistements;