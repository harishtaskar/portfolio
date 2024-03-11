"use client";
import React, { useEffect } from "react";
import classes from "./css/herosection.module.css";
import Image from "next/image";
import profile from "@/assets/images/profile.jpg";
import CopyButton from "./CopyButton";
import AOS from "aos";
import { useScramble } from "use-scramble";
import Link from "next/link";

type Props = {};

const HeroSection = ({}: Props) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const { ref, replay } = useScramble({
    text: "👋🏼 Hi, I am Harish Taskar, A Web Developer based in Surat.",
    playOnMount: true,
    speed: 0.9,
    overflow: false,
    overdrive: false,
  });

  return (
    <section className={classes.hero} id="home" data-aos="fade-up">
      <div className={classes["hero-content"]}>
        <div className={classes["hero-details"]}>
          <div className={classes["text-details"]}>
            <p className={classes["hero-title"]} ref={ref} onClick={replay} />
            <p className={classes["hero-subtitle"]}>
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </p>
          </div>
          <div className={classes["buttons"]}>
            <div className={classes["btn-email"]}>
              harishtaskar001@gmail.com
              <CopyButton />
            </div>
            <button className={classes["btn-email"]}>
              Resume
              <i className="ri-download-line ri-xl" />
            </button>
          </div>
        </div>
        <div>
          <Image
            src={profile}
            width={500}
            height={500}
            id="call"
            alt="profile"
            className={classes["hero-image"]}
            objectFit="cover"
            quality={80}
            style={{ minHeight: "200px", minWidth: "200px" }}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
