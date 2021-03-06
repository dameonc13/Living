import React, {Component} from 'react';
import {Navbar, Form, FormControl, Button, Nav, Col, Row, Container, Jumbotron, Card, ListGroup} from 'react-bootstrap';
import House from './images/homeNew.png';
import York from './images/yorkTownNew.jpg';
import City from './images/cityNew.jpg';
import Bright from './images/BrightlightsNew.jpg';
import Nice from './images/niceCityNew.jpg';
import Seattle from './images/SeattleNew.jpg';
import Golden from './images/goldenGateNew.jpg';
import MetLife from './images/metLifeNew.jpg';
import Coast from './images/coastNew.jpg';
import Mountain from './images/mountainNew.jpg';
import View from './images/viewNew.jpg';
import Rent from './images/house-clipart.jpg';
import Money from './images/moneybag.jpg';
import Health from './images/health.png';
import School from './images/school.jpg';
import Economy from './images/econ.png';
import './css/Dashboard.css';

let cityList = [York,City,Bright,Nice,Seattle,Golden,Coast,MetLife,Mountain,View];

let cityLoad = cityList[Math.floor(Math.random() * cityList.length)];

export default class Dashboard extends Component {
  Logout = () => {
    window.location.href = "http://localhost:3001/authentication/logout";
  };
  render() {
    return (
      <div className="dashboard">
        <Navbar sticky="top" bg="white" variant="light">
          <Navbar.Brand href="">
            <img
              alt=""
              src={House}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"Living.js"}
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/profile">Profile</Nav.Link>

            <Nav.Link onClick={this.Logout}>Logout</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl as="select" placeholder="Search" className="mr-sm-2">
              <option>Search City</option>
              <option>New York, NY</option>
              <option>San Francisco, CA</option>
              <option>Boston, MA</option>
              <option>Jersey City, NJ</option>
              <option>Washington, DC</option>
              <option>Miami, FL</option>
              <option>Chicago, IL</option>
              <option>Seattle, WA</option>
              <option>Philadelphia, PA</option>
              <option>Minneapolis, MN</option>
              <option>Portland, OR</option>
              <option>Honolulu, HI</option>
              <option>Newark, NJ</option>
              <option>Baltimore, MD</option>
              <option>Pittsburgh, PA</option>
              <option>Atlanta, GA</option>
              <option>Oakland, CA</option>
              <option>Madison, WI</option>
              <option>Denver, CO</option>
              <option>Los Angeles, CA</option>
              <option>San Jose, CA</option>
              <option>Sacramento, CA</option>
              <option>Milwaukee, WI</option>
              <option>St. Louis, MO</option>
              <option>Buffalo, NY</option>
              <option>Austin, TX</option>
              <option>San Diego, CA</option>
              <option>Cleveland, OH</option>
              <option>New Orleans, LA</option>
              <option>Orlando, FL</option>
              <option>St. Paul, MN</option>
              <option>Long Beach, CA</option>
              <option>Charlotte, NC</option>
              <option>Santa Ana, CA</option>
              <option>Cincinnati, OH</option>
              <option>Tampa, FL</option>
              <option>Houston, TX</option>
              <option>Dallas, TX</option>
              <option>Norfolk, VA</option>
              <option>Lincoln, NE</option>
              <option>Omaha, NE</option>
              <option>Columbus, OH</option>
              <option>Anaheim, CA</option>
              <option>Boise, ID</option>
              <option>Reno, NV</option>
              <option>Nashville, TN</option>
              <option>Detroit, MI</option>
              <option>Irvine, CA</option>
              <option>Winston-Salem, NC</option>
              <option>Las Vegas, NV</option>
              <option>Raleigh, NC</option>
              <option>Fresno, CA</option>
              <option>Tucson, AZ</option>
              <option>Fremont, CA</option>
              <option>Kansas City, MO</option>
              <option>Indianapolis, IN</option>
              <option>Stockton, CA</option>
              <option>Durham, NC</option>
              <option>Alburquerque, NM</option>
              <option>Lexington, KY</option>
              <option>Laredo, TX</option>
              <option>Fort Worth, TX</option>
              <option>Anchorage, AK</option>
              <option>Hialeah, FL</option>
              <option>San Antonio, TX</option>
              <option>Birmingham, AL</option>
              <option>Phoenix, AZ</option>
              <option>Greensboro, NC</option>
              <option>Lousiville, KY</option>
              <option>Riverside, CA</option>
              <option>Lubbock, TX</option>
              <option>Bakersfield, CA</option>
              <option>Chula Vista, CA</option>
              <option>Fort Wayne, IND</option>
              <option>Colorado Springs, CO</option>
              <option>Plano, TX</option>
              <option>El Paso, TX</option>
              <option>Jacksonville, FL</option>
              <option>Corpus Christi, TX</option>
              <option>Memphis, TN</option>
              <option>Wichita, KS</option>
              <option>St. Petersburg, FL</option>
              <option>Oklahoma City, OK</option>
              <option>Toledo, OH</option>
              <option>Baton Rouge, LA</option>
              <option>Irving, TX</option>
              <option>Tulsa, OK</option>
              <option>Chandler, AZ</option>
              <option>Scottsdale, AZ</option>
              <option>San Bernardino, CA</option>
              <option>Mesa, AZ</option>
              <option>Garland, TX</option>
              <option>Gilbert, AZ</option>
              <option>Henderson, NV</option>
              <option>Arlington, TX</option>
              <option>Glendale, AZ</option>
              <option>Aurora, CO</option>
              <option>Virginia Beach, VA</option>
              <option>Cheasapeake, VA</option>
              <option>North Las Vegas, NV</option>
            </FormControl>

            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar>

        <Container>
          <Row>
            <Col sm="12">
              <Card className="bg-dark text-white">
                <Card.Img
                  src={cityLoad}
                  alt="Card image"
                  height="300px"
                  width="800px"
                />

                <Card.ImgOverlay>
                  <Card.Title>
                    <div className="title">Living.js</div>
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            

                        <Col sm="2">

                            <Card style={{ width: '18rem' }}>

                                <ListGroup variant="flush">

                                    <ListGroup.Item className="list1">Past Searches</ListGroup.Item>

                                    <ListGroup.Item>Miami</ListGroup.Item>

                                    <ListGroup.Item>Houston</ListGroup.Item>

                                    <ListGroup.Item>Las Vegas</ListGroup.Item>

                                    <ListGroup.Item>Seattle</ListGroup.Item>

                                    <ListGroup.Item>Washington</ListGroup.Item>

                                </ListGroup>

                            </Card>

                        </Col>

                        <Col sm="10">

                            <Jumbotron>

                                <Container className="output">

                                    <Row>

                                        <Col sm="12" className="introSentence">
                                        
                                            Living in "new city", your new salary will be estimated at about...
                                        
                                        </Col>

                                    </Row>

                                    <Row>

                                        <Col sm="12" className="salary">
                                        
                                            "$123,000"
                                        
                                        </Col>

                                    </Row>

                                    <div className="darkgray">

                                    <Row>

                                        <Col lg="4" className="sub">
                                        
                                            Living Cost

                                        </Col>

                                        <Col lg="4" className="sub">
                                        
                                            Housing
                                        
                                        </Col>

                                        <Col lg="4" className="sub">
                                        
                                            Healthcare
                                        
                                        </Col>

                                    </Row>

                                    <Row className="icons">

                                        <Col sm="4">

                                            <img src={Money} alt="Living" className="icon" height="150px" width="175px"/>

                                        </Col>

                                        <Col sm="4">

                                            <img src={Rent} alt="Housing" className="icon" height="150px" width="175px"/>

                                        </Col>

                                        <Col sm="4">

                                            <img src={Health} alt="arrow" className="icon" height="150px" width="175px"/>

                                        </Col>

                                    </Row>

                                    <Row className="percentages">

                                        <Col sm="4" className="up">
                                        
                                            35.4%
                                        
                                        </Col>

                                        <Col sm="4" className="down">
                                        
                                            12.5%
                                        
                                        </Col>

                                        <Col sm="4" className="up">
                                        
                                            1.8%
                                        
                                        </Col>

                                    </Row>

                                    <Row>

                                        <Col sm="6" className="sub">
                                        
                                            Eductaion
                                        
                                        </Col>

                                        <Col sm="6" className="sub">
                                        
                                            Economy

                                        </Col>

                                    </Row>

                                    <Row className="icons">

                                        <Col sm="6">
                                        
                                            <img src={School} alt="arrow" className="icon" height="150px" width="175px"/>

                                        </Col>

                                        <Col sm="6">
                                        
                                            <img src={Economy} alt="arrow" className="icon" height="150px" width="175px"/>
                                        
                                        </Col>

                                    </Row>

                                    <Row className="percentages">

                                        <Col sm="6" className="down">
                                        
                                            45.6%
                                        
                                        </Col>

                                        <Col sm="6" className="up">

                                            23.8%

                                        </Col>

                                    </Row>

                                    </div>

                 

          

             

             

                   
             </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
