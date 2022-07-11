
import './footer.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import {Link} from 'react-router-dom'
import { TiTick } from "react-icons/ti";

const Footer = () => {
    return(
    <>
    <MDBFooter className='footer-container text-center text-white secondary-color' >
    <div className='footer-image-container'>
        <Link to="/">
            <img className='header-image' src='http://183.82.120.80:9999/KPH-Footerlg.png' alt='company' />
        </Link>
    </div>
    
    <div className='footer-description-container text-black text-center'>
        <h1 className='footer-description-heading '>Why Us?</h1>
        <ul className='text-start list-style-none'>
            <li className='footer-list-item'><TiTick className='footer-tick-mark'/> Architectural Focus: Framework driven approach</li>
            <li className='footer-list-item'><TiTick className='footer-tick-mark'/> Customized solution based on different parameters - One size does not fit all</li>
            <li className='footer-list-item'><TiTick className='footer-tick-mark'/> Framework driven approach: adaptive to all software methodologies (Agile , scrum, waterfall, spiral, hybrid)</li>
        </ul>
    </div>
      <MDBContainer className='pt-4 footer-link-container'>
        <section className='mb-4'>

        <a
            className='btn btn-link btn-floating btn-lg text-dark m-1 footer-icon'
            href='https://www.linkedin.com/company/kph-infotech-private-limited/'
            target='blank'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-linkedin' />
          </a>

         <a
            className='btn btn-link btn-floating btn-lg text-dark m-1 footer-icon'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-twitter' />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1 footer-icon'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </a>

          {/* <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <MDBIcon fab className='fa-instagram' />
          </a> */}

        </section>

        <div className='text-center text-dark p-3' >
      © COPYRIGHT 2022 POWERED BY KPH INFOTECH
      </div>
      </MDBContainer>


    </MDBFooter>
    </>
    )
}

export default Footer