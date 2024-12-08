import AboutPic from"../assets/Dp1.jpg";
import {ABOUT_TEXT }from '../constants'
import { motion } from "framer-motion"
const About = () => {
  return (
   <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <h1 className="my-20 text-center  text-4xl">About me
    </h1>
    <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-2/5 lg:p-8">
            <div className="flex justify-center lg:justify-start">
                <img className="rounded-2xl" src={AboutPic} alt="About" />
            </div>
         </motion.div>
         <div className="w-full lg:w-1/2">
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: 100}}
            transition={{duration: 0.5}} className="flex justify-center lg:justify-start"> 
                <p className="my-6 max-w-xl py-6">{ABOUT_TEXT}
                     </p>
                 </motion.div>
         </div>
    </div>
   </div>
  )
}

export default About
