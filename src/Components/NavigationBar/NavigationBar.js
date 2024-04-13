import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <div className="container" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row p-4 text-center">
        <div className="col-lg-12 col-sm-8 col-4 " style={{ display: 'flex' }}>
          <div className='me-5'>
            <img className='img-fluid mt-3' style={{ width: "100%" }} src="./logo.png" alt="..." />
          </div>
          

          <div className="mt-2 me-5">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'lightgray' }} />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Talent Finder</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#about" >For Recruiters</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#services"style={{ color:'#5C27C0',fontWeight:'bolder'  }}>For Employers</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link href="#services" >About Us</Nav.Link>&nbsp;&nbsp;&nbsp;
                  <Nav.Link  href="#services" >Company</Nav.Link>&nbsp;&nbsp;&nbsp;

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div className='me-2'>
            <button className="rounded-3 mt-3" style={{ width: "120px", height: "44px", backgroundColor: '#FFFFFF', color: '#5C27C0', border: '2px solid #5C27C0' }}>Login</button>
          </div>

          <div>
            <button className="rounded-3 mt-3" style={{ width: "120px", height: "44px", backgroundColor: "#5C27C0", color: "#FFFFFF" ,border:'none'}}>Get Started</button>

          </div>
        </div>



      </div>
    </div>
  )
}

export default NavigationBar;