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
        </CardHeader>
        <CardBody>
          <img src={this.props.meal.photoUrl} style={{'width':'100%'}}/>
        </CardBody>
      </Card>
    );
  }
}
