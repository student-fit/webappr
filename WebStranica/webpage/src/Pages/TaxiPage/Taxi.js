import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import TaxiHeader from "../../components/TaxiHeader/TaxiHeader";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Vehicles from "../../components/Vehicles";





const Taxi = () => {
  const { t } = useTranslation();
  const slides = [
    {
      imageUrl: '/taxiimages/dubrovnik.jpg',
      altText: 'First slide',
      label: t("Dubrovnik"),
      caption: t("DubrovnikTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/medjugorje.jpg',
      altText: 'Second slide',
      label: t("Medjugorje"),
      caption: t("MedjugorjeTaxiCijena")
    },

    {
      imageUrl: '/taxiimages/mostar.jpg',
      altText: 'Third slide',
      label: t("Mostar"),
      caption: t("MostarTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/vodopad.jpg',
      altText: 'Third slide',
      label: t("VodopadKravica"),
      caption: t("VodopadKravicaTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/sarajevo.jpg',
      altText: 'Third slide',
      label: t("Sarajevo"),
      caption: t("SarajevoTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/zadar.jpg',
      altText: 'Third slide',
      label: t("Zadar"),
      caption: t("ZadarTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/tih.jpg',
      altText: 'Third slide',
      label: t("Tihaljina"),
      caption: t("TihaljinaTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/blagaj.jpg',
      altText: 'Third slide',
      label: t("Blagaj"),
      caption: t("BlagajTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/zagreb.jpg',
      altText: 'Third slide',
      label: t("Zagreb"),
      caption: t("ZagrebTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/split.jpg',
      altText: 'Third slide',
      label: t("Split"),
      caption: t("SplitTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/pocitelj.jpg',
      altText: 'Third slide',
      label: t("Pocitelj"),
      caption: t("PociteljTaxiCijena")
    },
    {
      imageUrl: '/taxiimages/neum.jpg',
      altText: 'Third slide',
      label: t("Neum"),
      caption: t("NeumTaxiCijena")
    }
  ];


  return (
    <div >

      <div>
        <TaxiHeader headertext={t("taxi")}></TaxiHeader>
        <Divider style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Chip label={t("taxiLocation")} size="small" />
        </Divider>
        <Vehicles t1={t("Taxi")} t2={t("taxiLocation")} slides={slides}></Vehicles>
      
        <Footer></Footer>

      </div>
    </div>

  );
};

export default Taxi;
