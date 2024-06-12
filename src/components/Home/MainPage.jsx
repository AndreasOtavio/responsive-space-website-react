export default function MainPage(){
 
    return(
        <div className='main'>
        <section className="home">
              <div className="home__container container">
                <div className="home__content">
                    <h3 className="home__subtitle">
                      Navigate the Universe
                    </h3>

                    <h1 className="home__title">
                      <span>
                          Go Beyond <br/>
                          Frontiers
                      </span>

                      <img src="/src/assets/img/line.svg" alt=""></img>
                    </h1>
                      <p className="home__description">
                          Start your exploration in space, Navigate and discover
                          all the wonders of the universe.
                      </p>

                      <a href="#" className="home__button">
                          Get Started!
                      </a>
                </div>

                <div className="home__images">
                    <img src="/src/assets/img/points-space.svg" alt="image" className="home__points"></img>
                    <img src="/src/assets/img/planet.svg" alt="image" className="home__planet-1"></img>
                    <img src="/src/assets/img/planet.svg" alt="image" className="home__planet-2"></img>
                    <img src="/src/assets/img/rocket.svg" alt="image" className="home__rocket"></img>
                </div>
              </div>

              <img src="/src/assets/img/clouds-1.svg" alt="image" className="home__cloud-1"></img>
              <img src="/src/assets/img/clouds-2.svg" alt="image" className="home__cloud-1"></img>

          </section>
      </div>
    )
}