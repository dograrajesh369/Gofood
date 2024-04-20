import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Carousel() {
  return (
    
    <MDBCarousel showControls showIndicators>
        {/* we need to put z-index */}
        <MDBCarouselCaption style={{zIndex:"10" }} >
        <Form inline>
        <Row>
          <Col className='serch' xs="md-auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col className='search' xs="md-auto">
            <Button className='bg-success' type="submit" >Submit</Button>
          </Col>
        </Row>
      </Form>
      </MDBCarouselCaption>

      <MDBCarouselItem className='Carousel' itemId={1}>
        <img src='https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?t=st=1713635127~exp=1713638727~hmac=b7857e6552a6db473c4761222167d42e779c39d12c5f90dce3aea623c67be605&w=740'style={{filter:"brightness(30%)"}} height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem className='Carousel' itemId={2}>
        <img src='https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.927844030.1713634395&semt=sph'style={{filter:"brightness(30%)"}} height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem className='Carousel' itemId={3}>
        <img src='https://img.freepik.com/premium-photo/dal-makhani-daal-makhni-is-popular-food-from-punjab-india-made-using-whole-black-lentil-red-kidney-beans-butter-cream-served-with-garlic-naan-indian-bread-roti_466689-22001.jpg?w=360'style={{filter:"brightness(30%)"}} height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem className='uCarousel'itemId={4}>
        <img src='https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1713638035~exp=1713641635~hmac=e8b7d7adf197510dc8ed08b3cbfaf1a06395435b7420ac3b116805c01bf89937&w=740' style={{filter:"brightness(30%)"}}height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem className='Carousel'itemId={5}>
        <img src='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.927844030.1713634395&semt=sph' style={{filter:"brightness(30%)"}} height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem className='Carousel'itemId={6}>
        <img src='https://img.freepik.com/free-photo/forkful-steaming-spaghetti-with-shiny-noodles-hint-tomato-sauce_157027-4214.jpg?size=626&ext=jpg&ga=GA1.1.927844030.1713634395&semt=sph' style={{filter:"brightness(30%)"}}height={526} className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>
  );
}
export default Carousel ;
