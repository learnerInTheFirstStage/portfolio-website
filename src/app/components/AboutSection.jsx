"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js Express.js</li>
                <li>Next.js React.js</li>
                <li>MySQL MongoDB PostgreSQL</li>
                <li>JavaScript/TypeScript HTML CSS</li>
                <li>Java Python C/C++</li>
                <li>Spring Docker Flask Nginx AWS Azuro</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Northeastern University, Computer Science, USA</li>
                <li>Tongji University, M.B.A, Shanghai China</li>
                <li>Henan University, Finance, Henan China</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Certificated Public Accountant</li>
                <li>Chartered Financial Analyst I</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/about-image.png' width={500} height={500} alt=''/>
                <div className='mt-4 md:mt-0 text-left fles flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white md-4'>About Me</h2>
                    <p className='text-base md:text-lg'>
                        Hi! I am Allen, currently pursuing an MS in Computer Science at Northeastern University. Prior to starting my graduate studies, I worked as a Software Development Engineer for a year, where I gained hands-on experience in full-stack development. During that time, I became proficient in technologies such as Java, Python, C++, Spring Framework, Node.js, Express, Flask, MySQL, PostgreSQL, MongoDB, as well as front-end technologies like HTML, CSS, JavaScript, React, and Next.js. I also worked extensively with Git for code management. I am excited and ready to embark on this new journey with full enthusiasm!
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab==="skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab==="education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab==="certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>);
}

export default AboutSection
