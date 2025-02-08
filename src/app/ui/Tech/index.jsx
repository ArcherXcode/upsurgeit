"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
const categories = [
  {
    title: "Front-end",
    items: [
      { icon: "/images/servicelogo/1.png", text: "JavaScript" },
      { icon: "/images/servicelogo/angular.png", text: "Angular" },
      { icon: "/images/servicelogo/vue.png", text: "Vue" },
      { icon: "/images/servicelogo/react.png", text: "React" },
      { icon: "/images/servicelogo/nextjs.png", text: "NextJs" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { icon: "/images/servicelogo/nodejs.png", text: "NodeJs" },
      { icon: "/images/servicelogo/laravel.png", text: "Laravel" },
      { icon: "/images/servicelogo/php.png", text: "PHP" },
      { icon: "/images/servicelogo/python.png", text: "Python" },
    ],
  },
  {
    title: "CMS",
    items: [
      { icon: "/images/servicelogo/WordPress.png", text: "WordPress" },
      { icon: "/images/servicelogo/magento.png", text: "Magento" },
      { icon: "/images/servicelogo/OpenCart.png", text: "OpenCart" },
      { icon: "/images/servicelogo/shopify.png", text: "Shopify" },
    ],
  },
  {
    title: "Mobile Application",
    items: [
      { icon: "/images/servicelogo/Android.png", text: "Android" },
      { icon: "/images/servicelogo/ios.png", text: "iOS" },
      { icon: "/images/servicelogo/Kotlin.png", text: "Kotlin" },
      { icon: "/images/servicelogo/flutter.png", text: "Flutter" },
      { icon: "/images/servicelogo/react.png", text: "React Native" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: "/images/servicelogo/MySQL.png", text: "MySQL" },
      { icon: "/images/servicelogo/mongo.svg", text: "MongoDB" },
      { icon: "/images/servicelogo/firebase.png", text: "Firebase" },
      { icon: "/images/servicelogo/PostgreSQL.png", text: "PostgreSQL" },
    ],
  },
  {
    title: "Cloud Computing",
    items: [
      { icon: "/images/servicelogo/aws.png", text: "AWS" },
      { icon: "/images/servicelogo/gcp.png", text: "Google Cloud" },
    ],
  },
];

const IconWithText = ({ icon, text }) => (
  <div style={styles.iconText}>
    <Image src={icon} alt={text} width={40} height={40} />
    <div className="">
      <span style={styles.para}>{text}</span>
    </div>
  </div>
);

const CategoryCard = ({
  title,
  items,
  cardStyle,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    style={cardStyle}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div style={styles.cardTitle}>{title}</div>
    <div style={styles.cardContent}>
      {items.map((item, index) => (
        <IconWithText key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Spacing lg="145" md="80" />

        <SectionHeading
          title="Creating Magic in Digital World"
          subtitle="Our Technologies"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </header>
      <main style={styles.grid}>
        {categories.map((category, index) => {
          const isHovered = hoverIndex === index;
          const cardStyle = {
            background: "#000",
            borderRadius: "8px",
            boxShadow: isHovered
              ? "#1085dc 0px 4px 16px 0px"
              : "gray 0px 2px 8px 0px",
            padding: "20px",
            width: "30%",
            cursor: "pointer",
            transition: "box-shadow 0.3s ease",
          };

          return (
            <CategoryCard
              key={index}
              title={category.title}
              items={category.items}
              cardStyle={cardStyle}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          );
        })}
      </main>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
  },
  grid: {
    display: "flex",
    gridTemplateColumns: "repeat(3, 1fr)", // Three cards in one row
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    background: "#000",
    borderRadius: "8px",
    boxShadow: "gray 0px 2px 8px 0px",
    padding: "20px",
    width: "30%",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#fff",
    minHeight: "50px",
    fontWeight:"600"
  },
  cardContent: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two items in one row
    gap: "20px",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "18px",
    color: "#fff",
  },
  para: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  toptitle: {
    fontSize: "40px",
    color: "white",
  },
};

export default Home;
