"use client";
import React, { useEffect } from "react";
import classes from "./css/projects.module.css";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import modernnest from "../assets/images/modernnest.png";
import promptopia from "../assets/images/promptopia.png";
import tornittos from "../assets/images/tornittos.png";
import AOS from "aos";

interface IProject {
  name: string;
  thumbnail: string;
  github: string[];
  website?: string[];
  description: string;
  tech: string[];
}

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-in-sine", delay: 0 });
  }, []);
  return (
    <section className={classes.projects} id="projects">
      <div className={classes.heading}>
        <i className="ri-arrow-down-line" />
        <Heading text={"Featured Work"} id="projects" />
      </div>
      {projects?.map((project: IProject, index: number) => {
        const image = project.thumbnail;
        return (
          <div
            className={classes["project"]}
            style={index % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
            key={index}
          >
            <Image
              className={`${classes["thumbnail"]} ${index % 2 !== 0 ? classes["right-radius"] : classes["left-radius"]}`}
              src={project.thumbnail}
              width={400}
              height={400}
              alt="project-thumbnail"
              objectFit="cover"
            />

            <div className={classes["details"]}>
              <span className={classes["project-name"]}>{project.name}</span>
              <p className={classes["project-description"]}>
                {project.description}
              </p>
              <div className={classes["technologies-div"]}>
                <span className={classes.description}> Technologies</span>:
                <div className={classes["technologies"]}>
                  {project?.tech?.map((item: string, index: number) => {
                    return <div key={index}>{item}</div>;
                  })}
                </div>
              </div>
              <span className={classes["project-description"]}> Github </span>
              <div className={classes["links"]}>
                {project?.github?.map((item: string, index: number) => {
                  return (
                    <Link className={classes.link} href={item} key={index}>
                      {item}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  );
                })}
              </div>
              <span className={classes["project-description"]}> Website </span>
              <div className={classes["links"]}>
                {project?.website?.map((item: string, index: number) => {
                  return (
                    <Link className={classes.link} href={item} key={index}>
                      {item}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
