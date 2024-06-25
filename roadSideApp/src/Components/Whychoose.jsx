import React from 'react'
import WhychooseData from './WhychooseData'
import { TbTruckDelivery } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { GiHotMeal } from "react-icons/gi";




const whyChoose = () => {
  return (
    <>
    <section className='whychoose__section'>
    <div className="section__titte">
    <h3>Why Choose us</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi minima rerum quas modi. Ipsum?</p>
    </div>


    <div className="choose__box">
    <WhychooseData cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. " cardIcon={<SiCodechef />}cardTitle="Best chef" />

    <WhychooseData cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit." cardIcon={<TbTruckDelivery />} cardTitle="Fast Delivery" />
    <WhychooseData 
    cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
     cardIcon={<GiHotMeal />} 
    cardTitle="Fresh Food" />

    <WhychooseData cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit." cardIcon={<TbTruckDelivery />}cardTitle="Free Delivery" />
    </div>

</section>
      
    </>
  )
}

export default whyChoose
