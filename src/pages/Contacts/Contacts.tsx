import React, {useContext, useState} from "react";
import style from "./Contacts.module.scss";
import styleContainer from "../../styles/Container.module.css";
import {Title} from "../../components/Title/Title";
import {TbBrandTelegram} from "react-icons/tb";
import {FaInstagram, FaSkype} from "react-icons/fa";
import {IoLogoLinkedin} from "react-icons/io";
import {TiLocationOutline} from "react-icons/ti";
import {FiPhoneCall} from "react-icons/fi";
import {GoMail} from "react-icons/go";
import {ContactsHeaderIcons} from "../../components/Icons/ContactsIcons/ContactsHeaderIcons/ContactsHeaderIcons";
import {ContactsBodyIcons} from "../../components/Icons/ContactsIcons/ContactsBodyIcons/ContactsBodyIcons";
import {Button} from "../../components/Button/Button";
import emailjs from "emailjs-com";
import {Links} from "../../components/Modal/Links/Links";
import successIcon from "../../assets/images/success.png";
import errorIcon from "../../assets/images/error.png";
import {TfiEmail} from "react-icons/tfi";
import {ModalContext} from "../../contexts/ModalContext";
import {LoaderContext} from "../../contexts/LoaderContext";

const modalContent =
  <div className={style.inner}>
    <h3>Thank you!</h3>
    <img className={style.successImage} alt="" src={successIcon}/>
    <p>Email has been sent.</p>
    <p>I will review your message and inform you of my decision later.</p>
  </div>;

const errorModalContent =
  <div className={style.inner}>
    <h3>Something went wrong!</h3>
    <img className={style.errorImage} alt="" src={errorIcon}/>
    <p>Email has not been sent!</p>
    <p>Please select an alternative method of communication by clicking on the icon that will be most convenient for you
      to contact me.</p>
    <Links/>
  </div>;

const rel = "noreferrer nofollow noopener";

export const Contacts = () => {

  const {showLoader, hideLoader} = useContext(LoaderContext);
  const {openModal} = useContext(ModalContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameValid, setNameValid] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [messageValid, setMessageValid] = useState<boolean>(true);

  const sendEmail = () => {

    if (!name || !email || !message) {
      setNameValid(!!name);
      setEmailValid(!!email);
      setMessageValid(!!message);
      return;
    }
    const templateParams = {
      name,
      email,
      subject,
      message
    };

    showLoader();

    try {
      emailjs.send(process.env.REACT_APP_MAIL_SERVICE_ID || "", process.env.REACT_APP_MAIL_TEMPLATE_ID || "", templateParams, process.env.REACT_APP_MAIL_USER_ID || "")
        .then((response) => {
          if (response.status === 200) {
            openModal(modalContent);
          } else {
            openModal(errorModalContent);
          }
        })
        .catch((err) => {
          console.log(err);
          openModal(errorModalContent);
        })
        .finally(() => {
          hideLoader();
        });
    } catch (err) {
      console.log(err);
      openModal(errorModalContent);
      hideLoader();
    }
  };

  return (
    <>
      <div className={style.contactsBlock} id="contacts">
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
          <Title title={"Contacts"}/>
          <div className={style.addressContainer}>
            <ContactsHeaderIcons
              logo={<TiLocationOutline/>}
              title={"Address"}
              description={"Belarus, Minsk"}
            />
            <ContactsHeaderIcons
              logo={<FiPhoneCall/>}
              title={"Phone"}
              description={"+375 (29) 582-91-59"}
            />
            <ContactsHeaderIcons
              logo={<GoMail/>}
              title={"Email"}
              description={"sh.dg.msq@mail.ru"}
            />
          </div>
          <div className={style.title}>
            <h2>Let's Connect</h2>
          </div>
          <div className={style.contactIcons}>
            <a href={"https://t.me/dmitry_shg"} target={"_blank"} rel={rel}>
              <ContactsBodyIcons
                title="Telegram" logoComponent={<TbBrandTelegram/>}
              />
            </a>
            <a href={"https://www.instagram.com/dmitry_shavlukevich/"} target={"_blank"} rel={rel}>
              <ContactsBodyIcons
                title="Instagram" logoComponent={<FaInstagram/>}
              />
            </a>
            <a href={"https://www.linkedin.com/in/dmitry-shavlukevich-1a5572228/"} target={"_blank"} rel={rel}>
              <ContactsBodyIcons
                title="LinkedIn" logoComponent={<IoLogoLinkedin/>}
              />
            </a>
            <a href={"https://join.skype.com/invite/JipTwlMEQLa1"} target={"_blank"} rel={rel}>
              <ContactsBodyIcons
                title="Skype" logoComponent={<FaSkype/>}
              />
            </a>
          </div>
          <div className={style.title} style={{marginBottom: 0}}>
            <h2>Send me a message</h2>
          </div>
          <form className={style.formContainer}>
            <div className={style.nameEmail}>
              <div className={`${style.name} ${!nameValid ? style.notValid : ""}`}>
                <span>Name *</span>
                <input
                  value={name}
                  onChange={e => setName(e.currentTarget.value)}
                  onFocus={() => setNameValid(true)}
                />
                <p style={{visibility: `${!nameValid ? "visible" : "hidden"}`}}>Name is required!</p>
              </div>
              <div className={`${style.email} ${!emailValid ? style.notValid : ""}`}>
                <span>Email *</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  onFocus={() => setEmailValid(true)}
                />
                <p style={{visibility: `${!emailValid ? "visible" : "hidden"}`}}>Email is required!</p>
              </div>
            </div>
            <div className={style.subject}>
              <span>Subject</span>
              <input
                value={subject}
                onChange={(e) => setSubject(e.currentTarget.value)}
              />
            </div>
            <div className={`${style.message} ${!messageValid ? style.notValid : ""}`}>
              <span>Message *</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                onFocus={() => setMessageValid(true)}
              />
              <p style={{visibility: `${!messageValid ? "visible" : "hidden"}`}}>Message is required!</p>
            </div>
          </form>
          <div className={style.buttonContainer}>
            <Button
              title={"Send a message"}
              onClick={sendEmail}
              logo={<TfiEmail/>}
            />
          </div>
        </div>
      </div>
    </>
  );
};
