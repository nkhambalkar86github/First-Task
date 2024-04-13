import { faArrowUpFromBracket, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SystemOperates = () => {


    return (
        <div className="container mb-5">
            <div className="text-center pt-5 pb-4">
                <h1 style={{ color: "#5C27C0", fontWeight: "lighter", font: "Garnett Regular" }}><span style={{ fontWeight: "bold" }}>How Our System</span> Operates</h1>
            </div>

            <div style={{ display: 'flex', textAlign: 'center' }}>

                <div class="card" style={{ backgroundColor: "#FFFFFF" }}>
                    <div >
                        <h6 class="card-title pt-4">Upload Documents <img className="rounded" src="./Frame1.png" alt="..." /></h6>
                        
                    </div>
                    <div class="card-body">

                        <p class="card-text pt-5">Shortlist the most qualified candidate and upload their details for the top companies</p>
                    </div>
                </div>


                <div class="card" style={{ backgroundColor: "#EFE5FF" }}>
                    <div class="card-body">
                        <h6 class="card-title pt-4">Upload Documents <img src="./" alt="..." /></h6>

                        <p class="card-text pt-5">Follow the link below to sign up and get access of the current job postings</p>

                    </div>
                </div>

                <div class="card" style={{ backgroundColor: "#FFFFFF" }} >
                    <div class="card-body">
                        <h6 class="card-title pt-4">Upload Documents <img src="./" alt="..." /></h6>

                        <p class="card-text pt-5">As soon as the candidate gets selected you get your benefits</p>
                    </div>
                </div>
            </div>

            <div className="pt-5 text-center">
                <button className='mt-4  item-center' type="submit"
                    style={{ color: "#5C27C0", border: "2px solid #5C27C0", backgroundColor: 'white', padding: "16px, 30px, 16px, 30px", width: "164px", height: "59px", borderRadius: "10px" }}>Get Started</button>


            </div>

        </div>
    )
}
export default SystemOperates;