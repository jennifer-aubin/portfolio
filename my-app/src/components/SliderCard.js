export const SliderCard = () => {
    return (
        <div className="container">
            <span className="slider" id="slider1"></span>
            <span className="slider" id="slider2"></span>
            <span className="slider" id="slider3"></span>
            <span className="slider" id="slider4"></span>


           <div className="cardContainer">
                <div className="slide_div" id="slide_1">
                    
                        <a href="#slider1" className="button" id="button1"></a>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                  
                </div>
                <div className="slide_div" id="slide_2">
                    
                        <a href="#slider2" className="button" id="button2"></a>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                   
                </div>
                <div className="slide_div" id="slide_3">
                  
                        <a href="#slider3" className="button" id="button3"></a>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
               
                </div>
                <div className="slide_div" id="slide_4">
              
                        <a href="#slider4" className="button" id="button1"></a>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
               
                </div>
           </div>
        </div>
    )
}

