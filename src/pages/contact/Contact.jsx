import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import BasicLayout from "../../components/layout/basicLayout";
import CategoryName from "../../components/category/CategoryName";
import styles from "./contact.module.scss";
import Input from "../../components/input/input";
import TextField from "../../components/input/TextField";
import { Helper } from "../../helpers/helper";
import hero from "../../assets/img/Hero.png";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdOutlineMessage, MdOutlineSubject } from "react-icons/md";
import { motion } from "framer-motion";
import Toast from "../../components/toast/Toast";
import MainBtn from "../../components/btns/mainBtn.jsx";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [show, setShow] = useState(false);
  const [txt, setTxt] = useState("");


  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    document.title = "Hire Aneeq | Web Developer in Pakistan - CodeAneeq"
  }, [])

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_2hf54bf";
    const templateId = "template_cbvufob";
    const publicKey = "_oW93TbwIqydexV5e";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: projectDesc,
    };

    if (!Helper.validateEmail(email)) {
      setTxt("Please Enter a valid email");
      setShow(true);
      setLoading(false);
    }
    else {
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setTxt("Message Sent Successfully");
          setShow(true)
          setName("");
          setEmail("");
          setSubject("");
          setProjectDesc("");
          setLoading(false);
        },
        (error) => {
          console.error("Email sending failed ❌", error);
          setTxt("Failed to send message");
          setShow(true)
          setLoading(false);
        }
      );
    }
  };

  return (
    <div>
      <BasicLayout>
        {show && <Toast show={show} txt={txt}/>}
        <div className="container">
          <div className={styles.contact_page_container}>
            <CategoryName category={"Talk To Us"} />
            <p className={styles.contact_headin}>
              Feel free to send us your queries and details.
            </p>

            <div className={styles.contact_content}>
              <motion.figure
                className={styles.avatar_container}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  className={`${styles.avatar_img}`}
                  src={hero}
                  alt="contact vector"
                />
                <div>
                  <h1>
                    Have a project or startup idea in mind? Let’s build
                    something amazing together.
                  </h1>
                </div>
              </motion.figure>

              <motion.form
                onSubmit={sendMail}
                className={styles.contact_inputs_div}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
              >
                <div className={`${styles.input_one}`}>
                  <Input
                    value={name}
                    onChange={setName}
                    placeholder={"Name"}
                    icon={<FaUser />}
                    required
                  />
                  <Input
                    value={subject}
                    onChange={setSubject}
                    placeholder={"Subject"}
                    icon={<MdOutlineSubject />}
                    required
                  />
                </div>

                <Input
                  value={email}
                  onChange={setEmail}
                  placeholder={"Email"}
                  icon={<MdEmail />}
                  type="email"
                  required
                />

                <TextField
                  value={projectDesc}
                  onChange={setProjectDesc}
                  placeholder={"Project Description"}
                  required
                />

                <div className={styles.btns}>
                  <div className={styles.btn_div}>
                    <MainBtn
                      loading={loading}
                      disabled={loading}
                      type="submit"
                      style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "8px"}}
                    >
                     Send Message <MdOutlineMessage />
                    </MainBtn>
                  </div>
                </div>

                <p>
                  Note: We will contact you as soon as possible through your
                  email.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </BasicLayout>
    </div>
  );
};

export default Contact;
