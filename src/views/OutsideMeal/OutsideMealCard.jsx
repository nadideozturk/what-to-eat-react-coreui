import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

type Props = {
  meal: any,
}

export default class OutsideMealCard extends Component<Props> {

  render() {
    return (
      <div className="card" style={{'width': '20rem'}}>
        <img className="card-img-top" src={this.props.meal.photoUrl} alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title"> {this.props.meal.name}
            <p className="float-right"> {this.props.meal.price} CAD </p>
          </h6>
        </div>
      </div>
    );
  }
}
