import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from 'framer-motion';

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard=({skill})=>{
  
  return(

  <VerticalTimelineElement contentStyle={ {background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  iconStyle={{ background: skill.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
      src={skill.icon}
      alt="the icon"
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{skill.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{skill.points}</p>
    </div>

  </VerticalTimelineElement>
  );
};



const Experience = () => {
  return (
 <>
 <motion.div variants={textVariant()}>
 <p className={styles.sectionSubText}>What I have learned so far</p>
      <h2 className={styles.sectionHeadText}>My Expertise</h2>
 </motion.div >

 <div className="mt-20 flex flex-col">
  <VerticalTimeline>
    {skills.map((skill,index)=>(
      <ExperienceCard  key={index} skill={skill}/>

    ))}
  </VerticalTimeline>
 </div>
 </>
  );
};

export default SectionWrapper( Experience, "work" )