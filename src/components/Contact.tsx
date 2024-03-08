import React from "react";
import classes from "./css/contact.module.css";

type Props = {};

const Contact = ({}: Props) => {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes["content"]}>
        <span className={classes["heading"]}>Contact Me</span>
        <p className={classes["description"]}>
          If you are looking to hire a web developer, I’m currently available
          for fulltime remote role.
        </p>
        <div className={classes["email-btn"]}>
          <i className={`${classes["email-icon"]} ri-mail-line`} />
          harishtaskar001@gmail.com
        </div>
        <div className={classes["social-links"]}>
          <div className={classes["social-link"]}>
            <i className={`${classes["linkedin"]} ri-linkedin-fill`} />
          </div>
          <div className={classes["social-link"]}>
            <i className={`${classes["twitter"]} ri-twitter-x-line`} />
          </div>
          <div className={classes["social-link"]}>
            <i className={`${classes["mail"]} ri-mail-line`} />
          </div>
          <div className={classes["social-link"]}>
            <i className={`${classes["whatsapp"]} ri-whatsapp-line`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
