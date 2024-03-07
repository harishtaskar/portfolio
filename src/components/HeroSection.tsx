import React from "react";
import classes from "./css/herosection.module.css";
import Image from "next/image";
import profile from "@/assets/images/profile.jpg";
import CopyButton from "./CopyButton";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-content"]}>
        <div className={classes["hero-details"]}>
          <div className={classes["text-details"]}>
            <p className={classes["hero-title"]}>
              Hi, I am Harish Taskar A Web Developer based in Surat.
            </p>
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
          </div>
        </div>
        <div>
          <Image
            src={profile}
            width={400}
            height={400}
            alt="profile"
            className={classes["hero-image"]}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;