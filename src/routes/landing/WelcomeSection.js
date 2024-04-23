import React from 'react'
import PizzaOne from '../../assets/images/welcome-section/pizza-one-parallax.webp'
import PizzaTwo from '../../assets/images/welcome-section/pizza-two-parallax.webp'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo} alt="" className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -100
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne} alt="" className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 100
          }}
          transition={{ duration: 5 }}
        />
        <h2 className="txt-white">
          Welcome to <span>Pizza Time</span> restaurant
        </h2>
        <p>
          Founded in 1982 we bring pizza slice by slice to the next level!
          Unique branding and being in the pizza industry is the formula to
          out success. We do understand what people want and convert desires
          to unique experiences of taste. Freshness, orignality and quality is
          only the small part of out priorities. Affortable costs, located
          almost anywhere you go, amazing online operational system to order
          food in one click. Easy to navigate pre-order options and amazing
          options for corporate parties! At Pizaa Time we care about you
          because you are the one who makes us special!
        </p>
      </section>
    </article>
  )
}

export default WelcomeSection;