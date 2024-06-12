export default function Header() {
   
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'), 
 navClose = document.getElementById('nav-close')

 if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
 }

 if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }


  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="ri-rocket-2-line"></i>Xplore
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Ships
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Buy Tickets
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>

            <a href="#" className="nav__button">
              Login
            </a>

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
    </>
  );
}
