import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from '/images/OURSTORYIMAGES/process carousel 1.jpg';
import exampleImage2 from '/images/OURSTORYIMAGES/process carousel 2.jpg';
import exampleImage3 from '/images/OURSTORYIMAGES/process carousel 3.jpg';
import exampleImage4 from '/images/OURSTORYIMAGES/process carousel 4.jpg';
import exampleImage5 from '/images/OURSTORYIMAGES/process carousel 5.jpg';

function CarouselComponent() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default CarouselComponent;