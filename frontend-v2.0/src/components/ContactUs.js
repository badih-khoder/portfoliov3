import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1kkm8s9",
        "template_76o5vof",
        form.current,
        "user_LMaGgCB25V3EdE9ASCW8y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="input">
      <div className="name_input" id="contact-me">
        <input
          className="in_o"
          type="text"
          placeholder="Name"
          name="user_name"
        />
      </div>

      <label className="label_o"></label>
      <div className="email_input">
        <input
          className="in_o"
          type="email"
          placeholder="Enter Email"
          name="user_email"
        />
      </div>
      <label className="label_o"></label>
      <div className="content_input">
        <textarea className="ta_o" name="message" placeholder="Your Message" />
      </div>
      <div className="submit_button_oo">
        <input type="submit" classname="send_o" value="Send" />
      </div>
    </form>
  );
};

export default ContactUs;
