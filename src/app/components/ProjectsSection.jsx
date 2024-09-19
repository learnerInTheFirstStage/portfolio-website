"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Responsive and animated personal website using Next.js",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/learnerInTheFirstStage/portfolio-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Various Chart Data Shown Dynamically",
    description: "This could dynamically display chart data leveraging Next.js and Django backend",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/learnerInTheFirstStage/charts_api",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Reggie Takeout Application",
    description: "Web and mobile application utilizing VUE.js, ElementUI and Spring Boot",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/learnerInTheFirstStage/light_weight_takeout",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Simple E-commerce Shopping Platform",
    description: "Simple version of E-commerce platform built with JavaScript",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/learnerInTheFirstStage/easy-e-commerce-platform",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Guide Tour Application",
    description: "Guide Tour application with React, Node.js, and MongoDB",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange} 
          name='All' 
          isSelected={tag === 'All'}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name='Web' 
          isSelected={tag === 'Web'}
        />
        <ProjectTag 
          onClick={handleTagChange} 
          name='Mobile' 
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants} 
            initial='initial' 
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              decription={project.description} 
              imgUrl={project.image} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
