// import React, { useState } from "react";
// import './contact.css';
// import vg from "../../assets/contact.jpg";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebase";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [disableBtn, setDisableBtn] = useState(false);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setDisableBtn(true);
//     try {
//       await addDoc(collection(db, "contacts"), {
//         name,
//         email,
//         message,
//       });
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success("Message Sent");
//       setDisableBtn(false);
//     } catch (error) {
//       toast.error("Error");
//       console.log(error);
//       setDisableBtn(false);
//     }
//   };

//   const animations = {
//     form: {
//       initial: {
//         x: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         x: 0,
//         opacity: 1,
//       },
//     },

//     button: {
//       initial: {
//         y: "-100%",
//         opacity: 0,
//       },
//       whileInView: {
//         y: 0,
//         opacity: 1,
//       },
//       transition: {
//         delay: 0.5,
//       },
//     },
//   };

//   return (

//     <section className="contact section contact__section" id="contact">

//       <div className="contact__container">
//         <section className="contact__section">
//           <motion.form onSubmit={submitHandler} {...animations.form} className="contact__form">
//             <h2 className="contact__form-heading">Contact Me</h2>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Your Name"
//               required
//               className="contact__form-input"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="contact__form-input"
//             />
//             <input
//               type="text"
//               placeholder="Your Message"
//               required
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="contact__form-input"
//             />
//             <motion.button
//               disabled={disableBtn}
//               className={`contact__form-button ${disableBtn ? "disableBtn" : ""}`}
//               {...animations.button}
//               type="submit"
//             >
//               Send
//             </motion.button>
//           </motion.form>
//         </section>
//         <aside className="contact__aside">
//           <img src={vg} alt="Graphics" className="contact__aside-img" />
//         </aside>
//       </div>

//     </section>


//   );
// };

// export default Contact;






import React from "react";
import './contact.css';
import vg from "../../assets/contact.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const animations = {
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section className="contact section contact__section" id="contact">
      <div className="contact__container">
        <section className="contact__section">
          <motion.div {...animations.button} className="contact__button-container">
            <h2 className="contact__heading">Contact Me</h2>
            <a href="mailto:pranjalshinde.dev@gmail.com" className="contact__button">
              Mail Me
            </a>
          </motion.div>
        </section>
        <aside className="contact__aside">
          <img src={vg} alt="Graphics" className="contact__aside-img" />
        </aside>
      </div>
    </section>
  );
};

export default Contact;
