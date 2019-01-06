import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

type Props = {
  meal: any,
}

export default class HomemadeMealCard extends Component<Props> {

  render() {
    return (
      <div className="card" style={{'width': '20rem'}}>
        <Link to={`homemademeal/${this.props.meal.id}`}>
          <img className="card-img-top" src={this.props.meal.photoUrl} alt="Card image cap" />
        </Link>
        <div className="card-body">
          <h6 className="card-title"> {this.props.meal.name}
            <p className="float-right"> {this.props.meal.durationInMinutes} min </p>
          </h6>
        </div>
      </div>
    );
  }
}
