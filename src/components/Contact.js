import { faAddressCard, faEnvelope, faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import illus from '../assets/img/login.jpg';
import { SocialIcon } from 'react-social-icons';
import { TextField } from '@mui/material';

const Contact = () => {
  useEffect(() => {
    const handleFocus = (event) => {
      event.target.parentNode.classList.add("focus");
      event.target.parentNode.classList.add("not-empty");
    };

    const handleBlur = (event) => {
      const { value, parentNode } = event.target;
      if (value === "") {
        parentNode.classList.remove("not-empty");
      }
      parentNode.classList.remove("focus");
    };

    const inputs = document.querySelectorAll(".contact-input");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  return (
    <section id='contact' className="contact">
      <div className="containerc">
        <span className="big-circle"></span>
        <img src="./img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              We're here for you whenever you need us! Our customer support
              team is available 24/7 to answer any questions or concerns you
              may have.
            </p>
            <div className="info">
              <div className="information">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon"
                  alt=""
                />
                <a href="mailto:support@payv3rse.co">
                  <p>support@payv3rse.co</p>
                </a>
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faPhone} className="icon" alt="" />
                <p>+234-810 829 6519</p>
              </div>
              <div className="information">
                <SocialIcon
                  network="whatsapp"
                  style={{ height: 20, width: 20 }}
                  className="icon"
                  alt=""
                />
                <a href="https://wa.me/+2348108296519">
                  <p>+234 810 829 6519‬</p>
                </a>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089662386775&mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <SocialIcon
                      network="facebook"
                      style={{ height: 35, width: 35 }}
                      className="text-transparent bg-transparent"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/payv3rse?s=21&t=W9T650l41dYZ-uWS50co-A"
                    target="_blank"
                  >
                    <SocialIcon
                      network="twitter"
                      style={{ height: 35, width: 35 }}
                      className="text-white"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/payv3rse?igshid=YmMyMTA2M2Y="
                    target="_blank"
                  >
                    <SocialIcon
                      network="instagram"
                      style={{ height: 35, width: 35 }}
                      className="text-white"
                    />
                  </a>
                  <a
                    href="https://t.me/payv3rsebymac?ref=dishapages"
                    target="_blank"
                  >
                    <SocialIcon
                      network="telegram"
                      style={{ height: 35, width: 35 }}
                      className="text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" method="post" className="contact-form">
              <div className="input-container">
                <input
                  className="contact-input"
                  autoComplete="off"
                  name="First Name"
                  type="text"
                  required
                />
                <label>First Name</label>
                <FontAwesomeIcon
                  className="icon"
                  icon={faAddressCard}
                />
              </div>
              <div className="input-container">
                <input
                  className="contact-input"
                  autoComplete="off"
                  name="Last Name"
                  type="text"
                  required
                />
                <label>Last Name</label>
                <FontAwesomeIcon
                  className="icon"
                  icon={faAddressCard}
                />
              </div>
              <div className="input-container w-100">
                <input
                  className="contact-input"
                  autoComplete="off"
                  name="Email"
                  type="email"
                  required
                />
                <label>Email</label>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
              </div>
              <div className="input-container textarea w-100">
                <textarea
                  name="Message"
                  autoComplete="off"
                  className="contact-input"
                  type="text"
                  required
                />
                <label>Message</label>
                <FontAwesomeIcon className="icon" icon={faInbox} />
              </div>
              <div className="contact-buttons w-100">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded-full py-2 px-4 text-[#ffd800] bg-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
