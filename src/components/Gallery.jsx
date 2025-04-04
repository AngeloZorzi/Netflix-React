import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Carousel,
  Container,
  Spinner,
  Alert,
} from "react-bootstrap";
import { PlayFill } from "react-bootstrap-icons";

class FilmGallery extends Component {
  state = {
    media: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { film } = this.props;
    console.log("Valore della prop apiSearch:", film);
    const apiUrl = `http://www.omdbapi.com/?apikey=81573f52&s=${encodeURIComponent(
      film
    )}`;
    console.log("API", apiUrl);
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta dell'API");
        }
      })
      .then((data) => {
        if (data.Response === "True" && Array.isArray(data.Search)) {
          this.setState({ media: data.Search, loading: false });
        } else {
          throw new Error("ERRORE!!!");
        }
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
        this.setState({ loading: false, error: error.message });
      });
  }

  render() {
    const { media, loading, error } = this.state;
    const { title } = this.props;

    if (error) {
      return (
        <div className="wrapper">
          <Container fluid>
            <h3 className="title">{title}</h3>
            <Alert variant="danger">
              <Alert.Heading>Mannaggia...</Alert.Heading>
              <p>{error}</p>
            </Alert>
          </Container>
        </div>
      );
    }
    if (loading) {
      return (
        <div className="wrapper">
          <Container fluid>
            <h3 className="title">{title}</h3>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <img
                src="../netflix_logo.png"
                alt="Netflix Logo"
                style={{
                  width: "150px",
                  height: "auto",
                }}
              />
              <Spinner animation="border" variant="danger" />
            </div>
          </Container>
        </div>
      );
    }

    const chunkedMedia = [];
    for (let i = 0; i < media.length; i += 6) {
      chunkedMedia.push(media.slice(i, i + 6));
    }

    return (
      <div className="wrapper">
        <Container fluid>
          <h3 className="title">{title}</h3>
          <Carousel interval={null}>
            {chunkedMedia.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="d-flex flex-nowrap gx-3">
                  {group.map((item, i) => (
                    <Col
                      key={i}
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      className="flex-shrink-0"
                    >
                      <Card className="bg-black border border-1 border-dark text-white film-card">
                        <div className="image-container">
                          <Card.Img
                            variant="top"
                            src={item.Poster}
                            alt={item.Title}
                            className="img"
                          />
                          <div className="overlay">
                            <button className="play-button">
                              <PlayFill size={30} />
                            </button>
                          </div>
                        </div>
                        <Card.Body className="p-2">
                          <Card.Title className="card-title">
                            {item.Title}
                          </Card.Title>
                          <Card.Text className="card-text">
                            {item.Year} • {item.Runtime || "N/A"}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default FilmGallery;
