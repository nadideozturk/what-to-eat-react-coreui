import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import OutsideMealCard from './OutsideMealCard';

const mockData =
[
  {
      "id": "16d704a0-4035-40a7-ba10-07732652d228",
      "name": "Beef Bourguignon",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650922/whattoeat/outsidemeals/16d704a0-4035-40a7-ba10-07732652d228.png",
      "price": 17,
      "restaurantName": "Burgo Bistro",
  },
  {
      "id": "2bda95df-debc-49d5-9149-c15f5f8c27f6",
      "name": "Beets Sauce",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649595/whattoeat/outsidemeals/2bda95df-debc-49d5-9149-c15f5f8c27f6.png",
      "price": 11,
      "restaurantName": "Nuba",
  },
  {
      "id": "37a4f4db-023a-4a18-ac53-f642cbf2d797",
      "name": "Pancakes",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1535701140/whattoeat/outsidemeals/37a4f4db-023a-4a18-ac53-f642cbf2d797.png",
      "price": 12,
      "restaurantName": "Jam’s Cafe",
  },
  {
      "id": "62c2a5b7-978f-4394-8461-2383daabf3ee",
      "name": "Shrimps in butter",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650994/whattoeat/outsidemeals/62c2a5b7-978f-4394-8461-2383daabf3ee.png",
      "price": 7,
      "restaurantName": "Burgo Bistro",
  },
  {
      "id": "795de5bc-4888-4da7-b3e3-78636564e491",
      "name": "Macaroni with Cheese",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1535238586/whattoeat/outsidemeals/795de5bc-4888-4da7-b3e3-78636564e491.png",
      "price": 15,
      "restaurantName": "Burgo Bistro",
  },
  {
      "id": "7cd5700b-5919-4035-820d-b82ac36e40e0",
      "name": "Nuts Waffle",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649860/whattoeat/outsidemeals/7cd5700b-5919-4035-820d-b82ac36e40e0.png",
      "price": 7,
      "restaurantName": "Edem",
  },
  {
      "id": "a487cd2f-4260-47a9-b360-2863cae0bf7d",
      "name": "Donuts",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649722/whattoeat/outsidemeals/a487cd2f-4260-47a9-b360-2863cae0bf7d.png",
      "price": 5,
      "restaurantName": "Breka Bakery",
  },
  {
      "id": "ab4e1563-631e-4472-890d-b7a3b3cb7e71",
      "name": "Eclair and Cake",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649677/whattoeat/outsidemeals/ab4e1563-631e-4472-890d-b7a3b3cb7e71.png",
      "price": 10,
      "restaurantName": "Breka Bakery",
  },
  {
      "id": "c8889b52-3ff9-4a12-a4d7-eb391ab24d14",
      "name": "Burger",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650760/whattoeat/outsidemeals/c8889b52-3ff9-4a12-a4d7-eb391ab24d14.png",
      "price": 15,
      "restaurantName": "Fat Burger",
  },
  {
      "id": "ca8f8328-c7af-493d-9d7c-2efc1a7fb9d2",
      "name": "Beef and Potatoes Boorek",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536823495/whattoeat/outsidemeals/ca8f8328-c7af-493d-9d7c-2efc1a7fb9d2.png",
      "price": 32,
      "restaurantName": "Nuba",
  },
  {
      "id": "d77776e0-1649-42b6-b9ff-24d6cb8398c9",
      "name": "Angus Beef with fries",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649956/whattoeat/outsidemeals/d77776e0-1649-42b6-b9ff-24d6cb8398c9.png",
      "price": 35,
      "restaurantName": "Cactus Cafe",
  },
  {
      "id": "e8ab2fdb-319c-47a1-a013-4073563e40d1",
      "name": "Cabbage Lamb Dolmas",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536823545/whattoeat/outsidemeals/e8ab2fdb-319c-47a1-a013-4073563e40d1.png",
      "price": 12,
      "restaurantName": "Nuba",
  },
  {
      "id": "f5351d1a-bd86-4ef8-9382-b566b92c4559",
      "name": "Brailed Lamb and Beans",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536823431/whattoeat/outsidemeals/f5351d1a-bd86-4ef8-9382-b566b92c4559.png",
      "price": 32,
      "restaurantName": "Nuba",
  },
  {
      "id": "f8252e1f-ae6a-4421-817a-acfce61a54de",
      "name": "Borek",
      "photoUrl": "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649806/whattoeat/outsidemeals/f8252e1f-ae6a-4421-817a-acfce61a54de.png",
      "price": 5,
      "restaurantName": "Sariyer Borekcisi",
  }
]


class OutsideMeal extends Component {
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
              <OutsideMealCard meal={meal} />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default OutsideMeal;
