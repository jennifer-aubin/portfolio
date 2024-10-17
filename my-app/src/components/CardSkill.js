import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardSkill = () => { // Ajout de la définition du composant CardSkill
  const responsive = {
    superLargeDesktop: {
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
    <Carousel responsive={responsive}>
      <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle 1</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="card-link">Card link 1</a>
          <a href="#" className="card-link">Another link 1</a>
        </div>
      </div>

      </div>
      <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle 1</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="card-link">Card link 1</a>
          <a href="#" className="card-link">Another link 1</a>
        </div>
      </div>
      </div>
      <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle 1</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="card-link">Card link 1</a>
          <a href="#" className="card-link">Another link 1</a>
        </div>
      </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle 1</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="card-link">Card link 1</a>
          <a href="#" className="card-link">Another link 1</a>
        </div>
      </div>
      </div>
    </Carousel>
  );
};

export default CardSkill; // Export du composant