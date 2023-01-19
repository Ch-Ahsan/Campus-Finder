import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl,Button,Form } from 'react-bootstrap';
import data from '../Data/data.json';


const CateringSlider = ({ start }) => {
  return (
    <Carousel fade>

      {
        start.map((item) => (
          <Carousel.Item>
            <img src={item}
              alt="FirstSlide" className='d-block w-100' height="450px" width="20%" />

            <Carousel.Caption>
              <div>
                  
              <h2 style={{ color: "black" }}>Welcome To Catering Provider Management System</h2> <br /> <br /> <br /> <br /> 
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
             
               
               

              </div>
              



            </Carousel.Caption>

          </Carousel.Item>
        ))
      }
    </Carousel>

  )
}

export default CateringSlider;