"use client";
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import classes from "./css/contact.module.css";
import AOS from "aos";

type Props = {};

const Contact = ({}: Props) => {
  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const onChange = useCallback((event: any) => {
    const { name, value } = event.target;
    setData((prev: any) => {
      return { ...prev, [name]: value };
    });
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(data);
    },
    [data]
  );

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section className={classes.contact} id="contact">
      <div className={classes["content"]} data-aos="fade-up">
        <span className={classes["heading"]}>Contact Me</span>
        <p className={classes["description"]} data-aos="fade-up">
          If you are looking to hire a web developer, I’m currently available
          for fulltime remote role.
        </p>

        <form
          data-aos="fade-up"
          onSubmit={onSubmit}
          className={classes["form"]}
        >
          <input
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            className={classes["input"]}
            onChange={onChange}
          />
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder={"Message..."}
            className={classes["input"]}
            onChange={onChange}
          />
          <button
            type={"submit"}
            className={classes["email-btn"]}
            disabled={data?.email?.length || data?.email?.length ? false : true}
          >
            Send Message <i className="ri-send-plane-2-line" />
          </button>
        </form>
        <div className={classes["social-links"]} data-aos="fade-up">
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
          <div className={classes["social-link"]}>
            <i className={`${classes["github"]} ri-github-line`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
