import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

type Props = {
  meal: any,
}

export default class HomemadeMealCard extends Component<Props> {

  render() {
    return (
      <Card>
        <CardHeader>
          {this.props.meal.name}
          <div className="card-header-actions">
            <p className="float-right">
              {this.props.meal.durationInMinutes} min
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
