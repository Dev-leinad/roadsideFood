
import eate from '../../assets/images/eate.jpg'
import RatingFeedback from '../../Components/RatingFeedback'
function HeroSection() {
  return (
   <section className='hero__section' >
    <div className='hero__content'>
         <h3>It's not just Food, It's the Experience.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur architecto sit atque at quidem commodi aperiam ea repudiandae corrupti?</p>
        <button>
        Book Now </button>
    </div>
    <div className='hero__img'> <img src={eate} alt="lady eating " /></div>
    

   
   
   </section>
  )
}

export default HeroSection
