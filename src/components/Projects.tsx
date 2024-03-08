import React from "react";
import classes from "./css/projects.module.css";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/images/product.jpg";
import image2 from "../assets/images/product2.jpg";

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
  return (
    <section className={classes.projects} id="projects">
      <div className={classes.heading}>
        <i className="ri-arrow-down-line" />
        <Heading text={"Featured Work"} id="projects" />
      </div>
      {projects?.map((project: IProject, index: number) => {
        return (
          <div
            className={classes["project"]}
            style={index % 2 !== 0 ? { flexDirection: "row-reverse" } : {}}
          >
            <Image
              className={classes["thumbnail"]}
              src={index === 0 ? image : image2}
              width={200}
              height={200}
              alt="project-thumbnail"
              objectFit="cover"
            />
            <div className={classes["details"]}>
              <span className={classes["project-name"]}>{project.name}</span>
              <p className={classes["project-description"]}>
                {project.description}
              </p>
              <div className={classes["technologies-div"]}>
                <span className={classes.description}> Technologies :</span>
                <div className={classes["technologies"]}>
                  {project?.tech?.map((item: string) => {
                    return <div>{item}</div>;
                  })}
                </div>
              </div>
              <span className={classes["project-description"]}> Github </span>
              <div className={classes["links"]}>
                {project?.github?.map((item: string) => {
                  return (
                    <Link className={classes.link} href={item}>
                      {item}
                      <i className="ri-arrow-right-up-line" />
                    </Link>
                  );
                })}
              </div>
              <span className={classes["project-description"]}> Website </span>
              <div className={classes["links"]}>
                {project?.website?.map((item: string) => {
                  return (
                    <Link className={classes.link} href={item}>
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
