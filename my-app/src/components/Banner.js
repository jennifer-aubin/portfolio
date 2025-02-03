import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
 import headerImg from "../assets/img/rondblanc.png";
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
      <Container  fluid className="banner">
        <Row className="justify-content-center text-center mt-1" >
          <Col xs={12} md={8} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounceInLeft" : ""}>
                <span className="tagline">Discover My Work !</span>
              </div>}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounceInRight" : ""}>
                <h1>Welcom to my portfolio</h1>
              </div>}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounceInUp" : ""}>
                <p>Hello, I'm Jennifer, a web developer, and if you're here, it's to discover my work! If you like my work, you can contact me through the contact page.</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
