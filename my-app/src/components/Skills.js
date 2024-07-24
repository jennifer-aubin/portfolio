import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Skills
            </h2>
            <p>lorem efzef efzefz ffz'efzef eeee zfZEFZ.<br></br>rgggg feeeee zzzz aaaaa yyyyy iiiiii</p>
            <carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={} alt="Image">
              </div>
            </carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
