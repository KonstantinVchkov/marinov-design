import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from '/images/OURSTORYIMAGES/process carousel 1.jpg';
import exampleImage2 from '/images/OURSTORYIMAGES/process carousel 2.jpg';
import exampleImage3 from '/images/OURSTORYIMAGES/process carousel 3.jpg';
import exampleImage4 from '/images/OURSTORYIMAGES/process carousel 4.jpg';
import exampleImage5 from '/images/OURSTORYIMAGES/process carousel 5.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        
        <img className="d-block w-100" src="/images/OURSTORYIMAGES/process carousel 1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/OURSTORYIMAGES/process carousel 2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/OURSTORYIMAGES/process carousel 3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;