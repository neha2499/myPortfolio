
// the below code is used to make each component to be spread out evenely from left to right
import {motion} from 'framer-motion';

import {styles} from '../styles';

import { staggerContainer } from '../utils/motion';

const SectionWrapper=(Component, idName)=>
function HOC(){
    return(

       // the bellow code help in animate the component
        
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
}

export default SectionWrapper