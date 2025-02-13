import image1 from "../assets/img/skill1.png";
import image2 from "../assets/img/skill2.png";

export const SliderCard = () => {
    return (
        <div id="card-area">
            <div className="wrapper">
                <div className="box-area">
                    <div className="box">
                        <img src={image1} alt="" />
                        <div className="overlay">
                            <h3>Développement Web (Frontend & Backend)</h3>
                            
                            
                                <ul className="list1"> 
                                    <li>HTML / CSS</li>
                                    <li>SCSS</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                    <li>Next.js</li>
                                    <li>Ruby</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                    <li>Prisma</li>
                                </ul> 
                        </div>
                    </div>
                    <div className="box">
                        <img src={image2} alt="" />
                        <div className="overlay">
                            <h3>Outils & Bibliothèques</h3>
                                <ul className="list2"> 
                                    <li>NextAuth</li>
                                    <li>Cypress</li>
                                    <li>Shadcn</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind CSS</li>
                                    <li>GitHub</li>    
                                </ul> 
                        </div>
                    </div>
                    <div className="box">
                        <img src={image1} alt="" />
                        <div className="overlay">
                            <h3>Outils de Design</h3>
                                <ul className="list3">  
                                    <li>Figma</li>
                                    <li>Canva</li>  
                                </ul>  
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

