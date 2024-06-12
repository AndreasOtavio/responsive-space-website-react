import Button from "../Auxiliar/buttons/Button";

export default function Skylevel(){
    return(
        <div className='main'>
        <section className="home">
              <div className="home__container container">

                
              <img src="/src/assets/img/moon.png" alt="image" className="skylevel__moon"></img>
              <img src="/src/assets/img/stars.png" alt="image" className="skylevel__stars"></img>
              <img src="/src/assets/img/clouds-2.svg" alt="image" className="skylevel__cloud-2"></img>
          
              </div>
              
            
              <Button/>
          </section>
      </div>
    )
}