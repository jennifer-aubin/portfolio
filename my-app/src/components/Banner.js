import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
 // import headerImg from "../assets/img/rondblanc.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "web developer portfolio." ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick =() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(150);
    } else {
      setDelta(300 - Math.random() * 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Row className="d-flex align-items-center justify-content-center w-100">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={`centered-content ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <span className="tagline">Discover My Work !</span>
                <h1>{`Welcome to my `}<span className="wrap">{text}</span></h1>
                <p>Hello, I'm Jennifer, a web developer, and if you're here, it's to discover my work! If you like my work, you can contact me through the contact page.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
