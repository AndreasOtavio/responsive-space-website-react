import './App.css'

function App() {

  return (
    <>
     {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
         <nav className="nav container">
            <a href="#" className="nav__logo">
               <i className="ri-rocket-2-line"></i>Space
            </a>

            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
                  <li className="nav__item">
                     <a href="#" className="nav__link">Home</a>
                  </li>

                  <li className="nav__item">
                     <a href="#" className="nav__link">Features</a>
                  </li>

                  <li className="nav__item">
                     <a href="#" className="nav__link">Pricing</a>
                  </li>

                  <li className="nav__item">
                     <a href="#" className="nav__link">Contact</a>
                  </li>
               </ul>

               <a href="#" className="nav__button">Login</a>

               {/* <!-- ctrl + k + c --> */}
               {/* Close button */}
               <div className="nav__close" id="nav-close">
                  <i className="ri-close-line"></i>
               </div>
            </div>

            {/* <!-- Toggle button --> */}
            <div className="nav__toggle" id="nav-toggle">
               <i className="ri-apps-2-line"></i>
            </div>
         </nav>
      </header>
      <div className='main'>
        <section className="home">
              <div className="home__container container">
                <div className="home__content">
                    <h3 className="home__subtitle">
                      Navigate the Universe
                    </h3>

                    <h1 className="home__title">
                      <span>
                          Star Exploring 
                          Infinite Space
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
      
    </>
  )
}

export default App
