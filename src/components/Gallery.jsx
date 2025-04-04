import React, { Component } from "react";
import { Card, Col, Row, Carousel, Container } from "react-bootstrap";

class FilmGallery extends Component {
  state = {
    media: [],
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
          this.setState({ media: data.Search });
        } else {
          throw new Error("ERRORE!!!");
        }
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  }

  render() {
    const { media } = this.state;
    const { title } = this.props;

    if (!media || media.length === 0) {
      return <div>Loading...</div>;
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
                      <Card className="bg-black border-0 text-white">
                        <Card.Img
                          variant="top"
                          src={item.Poster}
                          alt={item.Title}
                          className="img"
                        />
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
