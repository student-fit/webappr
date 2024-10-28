import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import Card from "./components/Card";
import Vehicles from "./components/Vehicles";
import BigContent from "./components/BigContent/BigContent";
import Footer from "./components/Footer/Footer";


const Home = () => {
  const { t } = useTranslation();


  const cardsData = [
    { icon: "/images/pic1.jpg", title: t("card1title"), content: t("card1info") },
    { icon: "/images/pic2.jpg", title: t("card2title"), content: t("card2info") },
    { icon: "/images/pic3.jpg", title: t("card3title"), content: t("card3info") },
    { icon: "/images/pic4.jpg", title: t("card4title"), content: t("card4info") },
  ];

  const slides = [
    {
      imageUrl: '/images/car1.jpg',
      altText: 'First slide',
      label: t("vehicles1"),
      caption: t("vehicles1info")
    },
    {
      imageUrl: '/images/car2.jpg',
      altText: 'Second slide',
      label: t("vehicles2"),
      caption: t("vehicles2info")
    },
    {
      imageUrl: '/images/van.jpg',
      altText: 'Third slide',
      label: t("vehicles3"),
      caption: t("vehicles3info")
    },
    {
      imageUrl: '/images/bus.jpg',
      altText: 'Third slide',
      label: t("vehicles4"),
      caption: t("vehicles4info")
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>{t("welcome_message")}</div>

      <div className={styles.imageContainer}>
        <img src="/images/welcome_image1.jpg" alt={t("welcome_alt_text")} className={styles.image} />
      </div>
      <div>
        <div className={styles.cardsContainer}>
          {cardsData.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} content={card.content} />
          ))}
        </div>
        <Vehicles slides={slides} t1={t("vehlicetitle")} t2={t("vehliceinfo")}></Vehicles>
      </div>
      <div>
        <BigContent t1={t("dubrovnikinfo")}title={t("dubrovnikTitle")} description={t("dubrovnikDescription")} picture={"/images/dubrovnik.jpg"}  picture2={"/images/mostar.jpg"} title2={t("mostarTitle")} description2={t("mostarDescription")} ></BigContent>
      </div>
      <div>
        <Footer></Footer>
        
      </div>
    </div>

  );
};

export default Home;
