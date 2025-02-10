import image1 from "../assets/img/para.png";

export const SliderCard = () => {
    return (
        <div id="card-area">
            <div className="wrapper">
                <div className="box-area">
                    <div className="box">
                        <img src={image1} alt="" />
                        <div className="overlay">
                            <h3>Développement Web (Frontend & Backend)</h3>
                            <p>HTML / CSS
                                            SCSS
                                            JavaScript (ES6+)
                                            React.js
                                            Next.js
                                            Ruby
                                            Ruby on Rails
                                            SQL
                                            MongoDB
                                            Prisma</p>
                            <a href="#">rgfkjnaerikgiaergbaebrtgbn</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image1} alt="" />
                        <div className="overlay">
                            <h3>Outils & Bibliothèques</h3>
                            <p>NextAuth (authentification pour Next.js)
                                    Cypress (tests end-to-end)
                                    Shadcn (UI pour React)
                                    Bootstrap
                                    Tailwind CSS
                                    GitHub</p>
                            <a href="#">rgfkjnaerikgiaergbaebrtgbn</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={image1} alt="" />
                        <div className="overlay">
                            <h3>Outils de Design</h3>
                            <p>Figma Canva</p>
                            <a href="#">rgfkjnaerikgiaergbaebrtgbn</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

