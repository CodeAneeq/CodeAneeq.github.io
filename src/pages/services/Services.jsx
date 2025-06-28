// import React from 'react';
// import styles from './service.page.module.scss';
// import BasicLayout from '../../components/layout/basicLayout';
// import CategoryName from '../../components/category/CategoryName';
// import Service from '../../components/servicesComponent/Service';
// import { MdMobileScreenShare } from "react-icons/md";
// import { RiPagesLine } from "react-icons/ri";
// import { IoDocumentsOutline } from "react-icons/io5";
// import { RiNftLine } from "react-icons/ri";
// import { FaCode, FaLaptopCode } from "react-icons/fa";
// import { FaWordpressSimple } from "react-icons/fa";
// import { FaShopify } from "react-icons/fa";

// const Services = () => {
//   const servicesData = [
//     {
//       service: "Custom Web App",
//       serDesc: "We build modern, flexible, secure, and user-friendly web apps that are cross-platform and scalable, designed to efficiently handle sudden traffic spikes and manage complex scenarios with performance and reliability in mind.",
//       icon: <MdMobileScreenShare />,
//     },
//     {
//       service: "Landing Pages",
//       serDesc: "We pay special attention to create attention-grabbing landing pages that convince your users to take the required action. We use a combination of eye-catching backgrounds and images to make each section stand out.",
//       icon: <RiPagesLine />,
//     },
//     {
//       service: "Responsive websites",
//       serDesc: "We create responsive websites via CSS and JavaScript plugins. Our design has a flexible layout and images that work on various devices: mobile, desktop, tablet, etc.",
//       icon: <IoDocumentsOutline />,
//     },
//     {
//       service: "NFT Landing Pages",
//       serDesc: "We design unique NFT landing pages with awesome animations and themes. These landing pages have 5 to 7 sections that include, engaging content, Art slider, Roadmap, Team, Faq, etc.",
//       icon: <RiNftLine />,
//     },
//     {
//       service: "Full Stack Web Apps",
//       serDesc: "We develop full-stack Web Apps for both the front-end and back-end project directories. Apart from using HTML and CSS, we also use JavaScript, ReactJs, and Firebase to create full-stack web apps.",
//       icon: <FaLaptopCode />,
//     },
//     {
//       service: "Backend Development",
//       serDesc: "We build scalable backends that serve as the backbone of your application. From user authentication to database management and API creation, we ensure your app runs efficiently and is ready to scale.",
//       icon: <FaCode />,
//     },
//   ];

//   return (
//     <BasicLayout>
//       <div className="container">
//         <div className={`${styles.service_page_container}`}>
//           <CategoryName category={"Services"} />
//           <p>Services We Offered</p>

//           {/* Manually creating divs for each pair of service cards */}
//           <div className={`${styles.services_card_div}`}>
//             <div className={`${styles.service_card_container}`}>
//               <Service service={servicesData[0].service} serDesc={servicesData[0].serDesc} icon={servicesData[0].icon} />
//               <Service service={servicesData[1].service} serDesc={servicesData[1].serDesc} icon={servicesData[1].icon} />
//             </div>
//             <div className={`${styles.service_card_container}`}>
//               <Service service={servicesData[2].service} serDesc={servicesData[2].serDesc} icon={servicesData[2].icon} />
//               <Service service={servicesData[3].service} serDesc={servicesData[3].serDesc} icon={servicesData[3].icon} />
//             </div>
//             <div className={`${styles.service_card_container}`}>
//               <Service service={servicesData[4].service} serDesc={servicesData[4].serDesc} icon={servicesData[4].icon} />
//               <Service service={servicesData[5].service} serDesc={servicesData[5].serDesc} icon={servicesData[5].icon} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </BasicLayout>
//   );
// };

// export default Services;


import React from 'react';
import styles from './service.page.module.scss';
import BasicLayout from '../../components/layout/basicLayout';
import CategoryName from '../../components/category/CategoryName';
import Service from '../../components/servicesComponent/Service';
import { MdMobileScreenShare } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiNftLine } from "react-icons/ri";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaWordpressSimple } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

const Services = () => {

 const servicesData = [
  {
    service: "Custom Web Apps",
    serDesc: "We build fast, scalable, and user-friendly web apps using the MERN stack, designed to handle heavy traffic and complex workflows with high performance and reliability.",
    icon: <MdMobileScreenShare />,
  },
  {
    service: "Landing Pages",
    serDesc: "We craft high-converting, visually engaging landing pages using React.js, combining modern design with user-focused layouts for better engagement.",
    icon: <RiPagesLine />,
  },
  {
    service: "Responsive Websites",
    serDesc: "We develop fully responsive, SEO-friendly websites with flexible layouts and optimized images that deliver a seamless user experience across all devices and screen sizes.",
    icon: <IoDocumentsOutline />,
  },
  {
    service: "NFT Landing Pages",
    serDesc: "We design unique, visually captivating NFT landing pages with interactive animations and engaging sections like Art Slider, Roadmap, Team Showcase, and FAQs.",
    icon: <RiNftLine />,
  },
  {
    service: "Full Stack Web Apps",
    serDesc: "We build complete full-stack web apps, managing both frontend and backend using technologies like React.js, Node.js, and Firebase integration.",
    icon: <FaLaptopCode />,
  },
  {
    service: "Backend Development",
    serDesc: "We create robust and scalable backends handling user authentication, database management, and custom APIs to power high-performing web apps.",
    icon: <FaCode />,
  },
];



  return (
<BasicLayout>
  <div className="container">
    <div className={`${styles.service_page_container}`}>
      <CategoryName category={"Services"} />
      <p>Services We Offered</p>

      {/* Manually creating divs for each pair of service cards */}
      <div className={`${styles.services_card_div}`}>
        <div className={`${styles.service_card_container}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[0].service} serDesc={servicesData[0].serDesc} icon={servicesData[0].icon} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[1].service} serDesc={servicesData[1].serDesc} icon={servicesData[1].icon} />
          </motion.div>
        </div>

        <div className={`${styles.service_card_container}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[2].service} serDesc={servicesData[2].serDesc} icon={servicesData[2].icon} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[3].service} serDesc={servicesData[3].serDesc} icon={servicesData[3].icon} />
          </motion.div>
        </div>

        <div className={`${styles.service_card_container}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[4].service} serDesc={servicesData[4].serDesc} icon={servicesData[4].icon} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Service service={servicesData[5].service} serDesc={servicesData[5].serDesc} icon={servicesData[5].icon} />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</BasicLayout>

  );
};

export default Services;



