import React, { useState } from 'react';
import styles from './footer.module.scss';
import CategoryName from '../category/CategoryName';
import { MdEmail } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [copiedText, setCopiedText] = useState(null);

  // Function to copy text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text); // Set the copied text
      setTimeout(() => setCopiedText(null), 2000); // Hide the message after 2 seconds
    }).catch((error) => {
      console.error("Failed to copy text: ", error);
    });
  };

  return (
    <div className={`${styles.footer_container}`}>
      <div className='container'>
        <div className={`${styles.footer_content}`}>
          <CategoryName category={"Get in Touch"} />
          <p className={`${styles.footer_para}`}>
            What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>

          <div className={`${styles.headings}`}>
            <h2>
              <span className={`${styles.right}`}><MdEmail /></span>
              codeaneeq@gmail.com
              <span
                className={`${styles.left}`}
                onClick={() => handleCopy("codeaneeq@gmail.com")}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <MdContentCopy />
                {copiedText === "codeaneeq@gmail.com" && (
                  <span
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "0",
                    fontSize: "12px",
                    color: "#4B5563",
                    backgroundColor: "#E5E7EB",
                    padding: "2px 5px",
                    borderRadius: "3px",
                  }}
                  >
                    Copied!
                  </span>
                )}
              </span>
            </h2>
            <h2>
              <span className={`${styles.right}`}><MdOutlinePhone /></span>
              +92 329 4230170
              <span
                className={`${styles.left}`}
                onClick={() => handleCopy("+92 329 4230170")}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <MdContentCopy />
                {copiedText === "+92 329 4230170" && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "0",
                      fontSize: "12px",
                      color: "#4B5563",
                      backgroundColor: "#E5E7EB",
                      padding: "2px 5px",
                      borderRadius: "3px",
                    }}
                  >
                    Copied!
                  </span>
                )}
              </span>
            </h2>
          </div>

          <p className={`${styles.footer_para}`}>You may also find me on these platforms</p>
           <ul className={`${styles.icons}`}>
              <a
                href="https://www.instagram.com/codeaneeq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className={`${styles.instagram}`}
                rel="noopener noreferrer"
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/codeaneeq/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkedin}`}
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaLinkedin/>
                </li>
              </a>
              <a
                href="https://github.com/CodeAneeq"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.github}`}
                style={{ color: "#4B5563", textDecoration: "none" }}
              >
                <li>
                  <FaGithub />
                </li>
              </a>
            </ul>
        </div>
        <div className={`${styles.last}`}>
          <p>© 2025 | Coded By Aneeq Ahmed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
