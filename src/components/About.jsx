import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

{/* create a new funtion component called service component */}

const ServiceCard=({index, title, icon})=>{
  return (
<Tilt className="xs:w-[250px] w-full">
  <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} 
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
    <div options={{
      max: 45,
      scale: 1,
      speed: 450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain "/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
  </motion.div>
</Tilt>
  )
}

const About = () => {
  return (
  
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1) } className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]
    ">I am an enthusiastic and talented recent graduate with a Master's in Electrical and Computer Engineering, eagerly looking for full-time software development positions. I possess a deep understanding of Java, React.js, and Spring Boot, which allows me to excel in software development. My primary goal is to apply my technical skills to foster innovation and tackle intricate challenges within the software development field. My key proficiencies include MongoDB, Java, Continuous Integration and Continuous Delivery (CI/CD), MySQL, and Spring Boot.</motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index)=>( /* for each mapping function its gonna rendered self conatined component called service card */
        <ServiceCard  key ={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}
//wrapping the export in the section wrapper 
export default SectionWrapper(About, "about")