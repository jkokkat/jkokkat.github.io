import React from 'react';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import moisturizer from './images/moisturizer.png';
import cleanser from './images/cleanser.png';
import greenteajasmine from './images/greenteajasmine.png';
import hydratingb5gel from './images/hydratingb5gel.png';
import everydaycream from './images/everydaycream.png';
import morrocanoilconditioner from './images/morrocanoilconditioner.jpeg';

function Products() {
  return (
    <div className="products">
      <div class="container">
        <div class="row align-items-center my-1">
         
          <div class="col-lg-5">
            <h1 class="font-weight-light">Products</h1>
            <p>
              We offer a variety of different products for clients to buy after testing them out at our spa. 
              They are high-quality products that cater to many different skin types and skin types.
            </p>
          </div>
        </div>
      </div>
      <Container>
      <Row>
      <Col xs="6" sm="4">
        <img id= "prod" src ={moisturizer} height="200" width="200"></img>
        Moisturizer
        $40
        </Col>
        <Col xs="6" sm="4">
        <img id= "prod" src ={everydaycream} height="200" width="200"></img>
        Everyday Cream $60
        </Col>
        <Col xs="6" sm="4">
        <img id= "prod" src ={greenteajasmine} height="200" width="200"></img>
        Green Tea and Jasmine Hair Therapy $70
        </Col>
      </Row>
      <Row>
      <Col xs="6" sm="4">
        <img id= "prod" src ={hydratingb5gel} height="200" width="100"></img>
        Hydrating B5 Gel $60
        </Col>
        <Col xs="6" sm="4">
        <img id= "prod" src ={morrocanoilconditioner} height="200" width="200"></img>
        Morrocan Oil and Conditioner $55
        </Col>
        <Col xs="6" sm="4">
        <img id= "prod" src ={cleanser} height="200" width="200"></img>
        Cleanser $45
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Products;