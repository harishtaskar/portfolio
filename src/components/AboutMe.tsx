"use client";
import React, { useEffect } from "react";
import Heading from "./Heading";
import classes from "./css/aboutme.module.css";
import react from "@/assets/brands/react.svg";
import javascript from "@/assets/brands/javascript.png";
import mongodb from "@/assets/brands/mongodb.png";
import next from "@/assets/brands/next.svg";
import recoil from "@/assets/brands/recoil.svg";
import redux from "@/assets/brands/redux.png";
import tailwind from "@/assets/brands/tailwind.svg";
import typescript from "@/assets/brands/typescript.svg";
import html from "@/assets/brands/html.png";
import css from "@/assets/brands/css.png";
import nodejs from "@/assets/brands/nodejs.png";
import Image from "next/image";
import AOS from "aos";
import { useScramble } from "use-scramble";

type Props = {};

const skills = [
  { name: "React Js", thumb: react },
  { name: "Next Js", thumb: next },
  { name: "HTML", thumb: html },
  { name: "CSS", thumb: css },
  { name: "Javascript", thumb: javascript },
  { name: "Typscript", thumb: typescript },
  { name: "Redux", thumb: redux },
  { name: "Recoil Js", thumb: recoil },
  { name: "Tailwind CSS", thumb: tailwind },
  { name: "Node Js", thumb: nodejs },
  { name: "Mongodb", thumb: mongodb },
];

const AboutMe = ({}: Props) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const { ref, replay } = useScramble({
    text: "Education",
  });

  return (
    <section className={classes["about"]} id="about">
      <div className={classes.heading}>
        <i className="ri-arrow-down-line" />
        <Heading text={"About Me"} id="about" />
      </div>
      <p className={classes["about-me"]} data-aos="fade-up">
        {" "}
        I am a passionate software developer with a primary interest in
        developing applications using React JS, with a total experience of more
        than 1 years in software development, I have gained expertise in
        creating multiple consumer products and projects.{" "}
      </p>
      <div className={classes["content"]}>
        <div className={classes["container"]} data-aos="fade-up">
          <p className={classes["title"]} ref={ref} onClick={replay} />
          <p className={classes["paragraph"]}>
            <span className={classes["bold"]}>
              Bachelor of Computer Applications
            </span>{" "}
            (BCA) degree from Veer Narmad South Gujarat University in 2023.
          </p>
        </div>
      </div>
      <div className={classes["content"]}>
        <div className={classes["container"]} data-aos="fade-up">
          <p className={classes["title"]}>work experience</p>
          <p className={classes["paragraph"]}>
            <span className={classes["bold"]}>Bluesort Infotech</span> junior
            Web Developer from july 2023 to present.
          </p>
        </div>
      </div>
      <div className={classes["content"]}>
        <div className={classes["container"]} data-aos="fade-up">
          <p className={classes["title"]}>Skill Set</p>
          <div className={classes["skills"]}>
            {skills?.map((skill, index) => {
              return (
                <div
                  className={classes["skill"]}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-class-name="tooltip"
                  data-tooltip-content={skill.name}
                  data-tooltip-place="bottom"
                  data-aos="fade-up"
                  key={index}
                >
                  <Image
                    width={50}
                    height={50}
                    alt="skill"
                    src={skill.thumb}
                    className={classes["logo"]}
                  />
                  <p className={classes["skill-name"]}>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
