import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";



export const ProfileComponent = () => {
  const { user } = useAuth0();
  var countries = require("i18n-iso-countries");
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

  console.log(user.email)
  console.log(user.["https://example.com/country"])
  var userCountry = user.["https://example.com/country"].toString()
  var countryCode = countries.getAlpha2Code(userCountry, "en")
  var flagSource = "https://www.countryflags.io/"+countryCode+"/flat/64.png"

  return (

    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>

        <Col md>
          <h2>{user.name} - {user.["https://example.com/country"]} ({countryCode})</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>

        <Col md={2}>
          <img
            src={flagSource}
            alt={countryCode}
          />
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
   onRedirecting: () => <Loading />,
});
