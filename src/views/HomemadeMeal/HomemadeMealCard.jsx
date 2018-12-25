import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

type Props = {
  title: string,
  body: string,
}

export default class HomemadeMealCard extends Component<Props> {

  render() {
    return (
      <Card>
        <CardHeader>
          {this.props.title}
        </CardHeader>
        <CardBody>
          {this.props.body}
        </CardBody>
      </Card>
    );
  }
}
