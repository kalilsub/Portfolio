import React from "react"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Tech = () => {
  return (
    <>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center mb-20">Techs I am currently learning</motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} index={index}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
