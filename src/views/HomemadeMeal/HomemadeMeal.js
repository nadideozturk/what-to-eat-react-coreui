import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import HomemadeMealCard from './HomemadeMealCard';

const mockData = [{
    id: 1,
    title: "Mercimek",
    body: "Mercimek Yemegi yap"
  }, {
    id: 2,
    title: "Enginar",
    body: "Enginar Yemegi yap"
  },{
    id: 3,
    title: "Pirasa",
    body: "Pirasa Yemegi yap"
  }
]

class HomemadeMeal extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {mockData.map(meal =>
            <Col xs="12" sm="6" md="4" key={meal.id}>
              <HomemadeMealCard title={meal.title} body={meal.body} />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default HomemadeMeal;
