import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import GoogleLogin from 'react-google-login';
import HomemadeMealCard from './HomemadeMealCard';

const mockData =
  [
    {
        id: "27e645bf-813d-435c-90b5-d29e0e24478e",
        name: "Salmon Fish with Broccoli",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649097/whattoeat/homemademeals/27e645bf-813d-435c-90b5-d29e0e24478e.png",
        durationInMinutes: 25
    },
    {
        id: "41fb77fb-3475-4b4a-b1d1-197780bed424",
        name: "Pasta with Shrimp",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536395221/whattoeat/homemademeals/41fb77fb-3475-4b4a-b1d1-197780bed424.png",
        durationInMinutes: 12
    },
    {
        id: "4ed758d2-7fdd-4b63-b91d-c685c75c8b14",
        name: "Omelette",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650645/whattoeat/homemademeals/4ed758d2-7fdd-4b63-b91d-c685c75c8b14.png",
        durationInMinutes: 10
    },
    {
        id: "577661c9-28c8-42ec-b8ee-2c13ce8a9b0d",
        name: "Corn Bread",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649322/whattoeat/homemademeals/577661c9-28c8-42ec-b8ee-2c13ce8a9b0d.png",
        durationInMinutes: 40
    },
    {
        id: "6192f280-b3db-4fd4-8b12-fa14a71b564a",
        name: "Kavurma and Pilaf",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1535268790/whattoeat/homemademeals/6192f280-b3db-4fd4-8b12-fa14a71b564a.png",
        durationInMinutes: 145
    },
    {
        id: "7e90512d-a70c-4d2f-8714-6665fad8de27",
        name: "Chicken with Pasta",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649238/whattoeat/homemademeals/7e90512d-a70c-4d2f-8714-6665fad8de27.png",
        durationInMinutes: 60
    },
    {
        id: "8a1566a1-f8a4-4be7-a98d-b7e64cb11854",
        name: "Chicken with Carrots",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536648960/whattoeat/homemademeals/8a1566a1-f8a4-4be7-a98d-b7e64cb11854.png",
        durationInMinutes: 60
    },
    {
        id: "9c730ecd-34af-4138-8202-957e48006bc5",
        name: "Green Beans with Cacik Soup",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649033/whattoeat/homemademeals/9c730ecd-34af-4138-8202-957e48006bc5.png",
        durationInMinutes: 45
    },
    {
        id: "9d72a539-2fde-4df6-9a46-29261a251f43",
        name: "Angus Beef and Salad",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536649175/whattoeat/homemademeals/9d72a539-2fde-4df6-9a46-29261a251f43.png",
        durationInMinutes: 45
    },
    {
        id: "a6843b02-f1e1-4cd4-91b5-0aa2bed87c65",
        name: "Mushroom Cream Soup",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536648879/whattoeat/homemademeals/a6843b02-f1e1-4cd4-91b5-0aa2bed87c65.png",
        durationInMinutes: 30
    },
    {
        id: "da5c2462-9cab-4dcc-a627-2453fac118f3",
        name: "Kofte",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650711/whattoeat/homemademeals/da5c2462-9cab-4dcc-a627-2453fac118f3.png",
        durationInMinutes: 45
    },
    {
        id: "df0c3448-8dc6-4c06-ba93-30cc8634999f",
        name: "Green Lentils",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1536650603/whattoeat/homemademeals/df0c3448-8dc6-4c06-ba93-30cc8634999f.png",
        durationInMinutes: 60
    },
    {
        id: "df354283-c92f-4e85-b759-7118b465d453",
        name: "Spring Rolls",
        photoUrl: "https://res.cloudinary.com/dv0qmj6vt/image/upload/v1535271844/whattoeat/homemademeals/df354283-c92f-4e85-b759-7118b465d453.png",
        durationInMinutes: 22
    }
]

const responseGoogle = (response) => {
  console.log(response);
  localStorage.setItem('id_token', response.tokenObj.id_token);
}

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
        {localStorage.getItem('id_token') ? "" : <GoogleLogin
          clientId="8792279534-hju50uid2ncs1r32n2kct2jlbjge4rq9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        /> }

        <Row>
          {mockData.map(meal =>
            <Col xs="12" sm="6" md="4" key={meal.id}>
              <HomemadeMealCard meal={meal} />
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default HomemadeMeal;
