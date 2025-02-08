import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'Do you offer custom web and app development services?',
    answer:
      'Yes, we specialize in custom web and mobile app development tailored to your business needs. Our team ensures a scalable, high-performing, and user-friendly solution.',
  },
  {
    question: 'What technologies do you use for web and app development?',
    answer:
      'We use modern technologies such as React, Next.js, Node.js, MongoDB, and MySQL for web development, and Flutter or React Native for mobile app development. Our stack ensures performance, security, and scalability.',
  },
  {
    question: 'How long does it take to develop a website or mobile app?',
    answer:
      'The timeline depends on the complexity of the project. A simple website may take 2-4 weeks, while a complex app with custom features can take 3-6 months. Contact us for a detailed project estimate.',
  },
  {
    question: 'Do you provide UI/UX design services?',
    answer:
      'Yes, we offer professional UI/UX design services to create visually appealing and user-friendly interfaces. We focus on a seamless user experience and responsive design.',
  },
  {
    question: 'Can you redesign an existing website or mobile app?',
    answer:
      'Absolutely! We can revamp your existing website or app to improve its design, functionality, and performance. We also ensure SEO optimization and responsiveness.',
  },
  {
    question: 'Do you provide website maintenance and support after development?',
    answer:
      'Yes, we offer ongoing maintenance and support services, including security updates, performance optimization, and feature enhancements to keep your website or app running smoothly.',
  },
  {
    question: 'Will my website or app be SEO-friendly?',
    answer:
      'Yes, we implement SEO best practices, including fast loading speed, mobile responsiveness, structured data, and optimized content to help your website rank higher in search engines.',
  },
  {
    question: 'Do you develop eCommerce websites and apps?',
    answer:
      'Yes, we build high-performing eCommerce websites and mobile apps with features like product management, secure payment gateways, and order tracking to enhance user experience.',
  },
  {
    question: 'How do you ensure the security of my website or app?',
    answer:
      'We follow industry best practices, including SSL encryption, secure authentication, data protection, and regular security audits to ensure your website or app is safe from cyber threats.',
  },
  {
    question: 'How can I get a quote for my project?',
    answer:
      'You can contact us through our website, email, or phone with your project requirements. Our team will analyze your needs and provide a detailed quote and timeline.',
  },
];



export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
