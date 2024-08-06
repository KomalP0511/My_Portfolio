// import React, { useContext, useRef, useState } from "react";
// import "./Contact.css";
// import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";
// const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const form = useRef();
//   const [done, setDone] = useState(false)
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_2mu5xtl",
//         "template_m5udu2c",
//         form.current,
//         "VLwg1ltOWvnCYAiK_"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-form" id="contact">
//       {/* left side copy and paste from work section */}
//       <div className="w-left">
//         <div className="awesome">
//           {/* darkMode */}
//           <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
//           <span>Contact me</span>
//           <div
//             className="blur s-blur1"
//             style={{ background: "#ABF1FF94" }}
//           ></div>
//         </div>
//       </div>
//       {/* right side form */}
//       <div className="c-right">
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name="user_name" className="user"  placeholder="Name"/>
//           <input type="email" name="user_email" className="user" placeholder="Email"/>
//           <textarea name="message" className="user" placeholder="Message"/>
//           <input type="submit" value="Send" className="button"/>
//           <span>{done && "Thanks for Contacting me"}</span>
//           <div
//             className="blur c-blur1"
//             style={{ background: "var(--purple)" }}
//           ></div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState('Send');

  const validateForm = () => {
    const formElements = form.current.elements;
    const userName = formElements.user_name.value;
    const userEmail = formElements.user_email.value;
    const message = formElements.message.value;
    if (!userName || !userEmail || !message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonText("Sending...");

    try {
      const result = await emailjs.sendForm(
        "service_up4gaio",
        "template_rm1t1dl",
        form.current,
        "MH81Ct91JxIcXLrqC"
      );

      console.log(result.text);

      if (result.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
        setDone(true);
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error details:", error);
      setStatus({ success: false, message: `An error occurred: ${error.message}. Please try again later.` });
    }

    setButtonText("Send");
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value={buttonText} className="button" />
          {status.message && (
            <span className={status.success === false ? "danger" : "success"}>{status.message}</span>
          )}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
