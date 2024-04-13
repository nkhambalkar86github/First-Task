import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <div className="container" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row p-4 ">
        <div className="col-lg-2 col-sm-4 col-12 ">
          <div className=' me-5'>
            <img className=' mt-3 pt-3' style={{ width: "100%" }} src="./logo.png" alt="..." />
          </div>
          </div>
          
          <div className="col-lg-6 col-sm-4 col-12 ">

          <div className="mt-2 me-5">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'lightgray' }} />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="mr-auto me-5">
                  <Nav.Link href="#home">Talent Finder</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#about" >For Recruiters</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#services"style={{ color:'#5C27C0',fontWeight:'bolder'  }}>For Employers</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#services" >About Us</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link  href="#services" >Company</Nav.Link>&nbsp;&nbsp;&nbsp;
                </Nav>                
              </Navbar.Collapse>
            </Navbar>
          </div>
          </div>
        
          <div className="col-lg-4 col-sm-4 col-12 ">

          <button className="rounded-3 mt-3 me-3" style={{ width: "120px", height: "44px", backgroundColor: '#FFFFFF', color: '#5C27C0', border: '2px solid #5C27C0' }}>Login</button>


          <button className="rounded-3 mt-3" style={{ width: "120px", height: "44px", backgroundColor: "#5C27C0", color: "#FFFFFF" ,border:'none'}}>Get Started</button>

        </div>



      </div>
    </div>
  )
}

export default NavigationBar;