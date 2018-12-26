import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

type Props = {
  meal: any,
}

export default class OutsideMealCard extends Component<Props> {

  render() {
    return (
      <Card>
        <CardHeader>
          {this.props.meal.name} at {this.props.meal.restaurantName}
          <div className="card-header-actions">
            <p className="float-right">
              {this.props.meal.price} min
            </p>
          </div>
        </CardHeader>
        <CardBody>
          <img src={this.props.meal.photoUrl} class = "img-fluid" style ={{height:'auto'}}/>
        </CardBody>
      </Card>
    );
  }
}
