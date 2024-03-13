"use client";
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import classes from "./css/contact.module.css";
import AOS from "aos";
import { useScramble } from "use-scramble";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

const Contact = ({}: Props) => {
  const [email, setEmail] = useState<any>("");
  const [message, setMessage] = useState<any>("");

  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const { ref, replay } = useScramble({
    text: "Contact Me",
    playOnMount: true,
    speed: 0.2,
    overflow: false,
    overdrive: false,
  });

  const validateEmail = (email: string | null) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onEmailChange = useCallback((event: any) => {
    const { value } = event.target;
    if (validateEmail(value)) {
      setEmail(value);
    } else {
      setEmail("");
    }
  }, []);

  console.log(email);
  const onMessageChange = useCallback((event: any) => {
    const { value } = event.target;
    setMessage(value);
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      let body = {
        service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        template_params: { from_email: email, message },
      };

      console.log(body);

      const sendMail = async () => {
        try {
          setBtnLoading(true);
          const response = await axios.post(
            `https://api.emailjs.com/api/v1.0/email/send`,
            body
          );
          if ((await response.data) === "OK") {
            setEmail("");
            setMessage("");
            toast.success("Message Sent");
            setBtnLoading(false);
          } else {
            toast.error("Something went wrong please try again later");
            setBtnLoading(false);
          }
        } catch (error) {
          toast.error("Something went wrong");
          setBtnLoading(false);
          console.log(error);
        }
      };
      sendMail();
    },
    [email, message]
  );

  let flag = true;

  const adjustScroll = useCallback(() => {
    if (flag && window.screen.width < 800) {
      window.scrollTo({ top: 5, behavior: "smooth" });
      flag = false;
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section className={classes.contact} id="contact">
      <div className={classes["content"]} data-aos="fade-up">
        <div className={classes["social-links"]} data-aos="fade-up">
          <Link
            href="https://www.linkedin.com/in/harishtaskar-innovator/"
            className={classes["social-link"]}
          >
            <i className={`${classes["linkedin"]} ri-linkedin-fill`} />
          </Link>
          {/* <Link href="/" className={classes["social-link"]}>
            <i className={`${classes["twitter"]} ri-twitter-x-line`} />
          </Link>
          <Link href="/" className={classes["social-link"]}>
            <i className={`${classes["mail"]} ri-mail-line`} />
          </Link>
          <Link href="/" className={classes["social-link"]}>
            <i className={`${classes["whatsapp"]} ri-whatsapp-line`} />
          </Link> */}
          <Link
            href="https://github.com/harishtaskar"
            className={classes["social-link"]}
          >
            <i className={`${classes["github"]} ri-github-line`} />
          </Link>
        </div>
        <span
          className={classes["heading"]}
          ref={ref}
          onLoad={replay}
          onClick={replay}
        />
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
            id={"from_email"}
            name={"from_email"}
            type={"email"}
            placeholder={"Email"}
            className={classes["input"]}
            onChange={onEmailChange}
            value={email}
            onFocus={adjustScroll}
          />
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder={"Message..."}
            className={classes["input"]}
            onChange={onMessageChange}
            value={message}
            onFocus={adjustScroll}
          />
          <button
            type={"submit"}
            style={
              email?.length > 0 && message?.length > 0 ? {} : { opacity: 0.6 }
            }
            className={classes["email-btn"]}
            disabled={email?.length > 0 && message?.length > 0 ? false : true}
          >
            {btnLoading ? (
              <a className="loading" />
            ) : (
              <>
                Send Message <i className="ri-send-plane-2-line" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
