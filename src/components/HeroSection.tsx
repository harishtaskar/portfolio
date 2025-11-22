"use client";
import React, { useCallback, useEffect } from "react";
import classes from "./css/herosection.module.css";
import Image from "next/image";
import profile from "@/assets/images/profile.jpeg";
import CopyButton from "./CopyButton";
import AOS from "aos";
import { useScramble } from "use-scramble";
import { saveAs } from "file-saver";
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

  const downloadHandler = useCallback(() => {
    saveAs(
      "https://firebasestorage.googleapis.com/v0/b/modernnest-5fe3d.appspot.com/o/portfolio%2FResume(Harish).pdf?alt=media&token=58b496ad-621d-4df3-8355-f3fc27d54783",
      "resume(harish).pdf"
    );
  }, []);

  return (
    <section className={classes.hero} id="home" data-aos="fade-up">
      <div className={classes["hero-content"]}>
        {/* <div className={classes["theme"]}>
          <ThemeButton />
        </div> */}
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
            <Link
              href={"#"}
              download={true}
              className={classes["btn-email"]}
              onClick={downloadHandler}
            >
              Resume
              <i className="ri-download-line ri-xl" />
            </Link>
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
