import React, { useState, useRef } from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  showMore,
  demo_link,
}) => {
  const isHidden = !showMore && index >= 3

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className={`${isHidden ? "hidden" : ""}`}
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full `}
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}
              >
                <img
                  src={github}
                  alt={github}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <button
                className="bg-black-100 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl hover:bg-gray-200  hover:text-black-100 transition-colors duration-500"
                onClick={() => window.open(demo_link, "_blank")}
              >
                <div>

                </div>
                Live Demo
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
              </button>
            </div>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}

const Works = () => {
  const [showMore, setShowMore] = useState(false)
  const ref = useRef()

  const toggleShowMore = () => {
    if (!showMore) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    setShowMore(!showMore)
  }
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center" ref={ref}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            showMore={showMore}
          />
        ))}
      </div>
      <button
        onClick={toggleShowMore}
        className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl mt-4 mx-auto block hover:bg-gray-200  hover:text-black-100 transition-colors duration-500"
      >
        {!showMore ? "Show more" : "show less"}
      </button>
    </>
  )
}

export default SectionWrapper(Works, "work")
