import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Vehicles from "../../components/Vehicles";
import TransfersHeader from "../../components/TransfersHeader/TransfersHeader";





const Transfer = () => {
  const { t } = useTranslation();
  const slides = [
   
    {
      imageUrl: '/taxiimages/medjugorje.jpg',
      altText: 'Second slide',
      label: t("MedjugorjeTransfer"),
      caption: t("MedjugorjeTransferCijena")
    },
    {
        imageUrl: '/taxiimages/zagreb.jpg',
        altText: 'Third slide',
        label: t("ZagrebTransfer"),
        caption: t("ZagrebTransferCijena")
      },

    {
      imageUrl: '/taxiimages/mostar.jpg',
      altText: 'Third slide',
      label: t("MostarTransfer"),
      caption: t("MostarTransferCijena")
    },
    {
        imageUrl: '/taxiimages/vodopad.jpg',
        altText: 'Third slide',
        label: t("VodopadKravicaTransfer"),
        caption: t("VodopadKravicaTransferCijena")
      },

    {
        imageUrl: '/taxiimages/dubrovnik.jpg',
        altText: 'First slide',
        label: t("DubrovnikTransfer"),
        caption: t("DubrovnikTransferCijena")
      },
   
   
    {
      imageUrl: '/taxiimages/zadar.jpg',
      altText: 'Third slide',
      label: t("ZadarTransfer"),
      caption: t("ZadarTransferCijena")
    },
    {
      imageUrl: '/taxiimages/tih.jpg',
      altText: 'Third slide',
      label: t("TihaljinaTransfer"),
      caption: t("TihaljinaTransferCijena")
    },
    {
        imageUrl: '/taxiimages/sarajevo.jpg',
        altText: 'Third slide',
        label: t("SarajevoTransfer"),
        caption: t("SarajevoTransferCijena")
      },
    {
      imageUrl: '/taxiimages/blagaj.jpg',
      altText: 'Third slide',
      label: t("BlagajTransfer"),
      caption: t("BlagajTransferCijena")
    },
    
    {
      imageUrl: '/taxiimages/split.jpg',
      altText: 'Third slide',
      label: t("SplitTransfer"),
      caption: t("SplitTransferCijena")
    },
    {
      imageUrl: '/taxiimages/pocitelj.jpg',
      altText: 'Third slide',
      label: t("PociteljTransfer"),
      caption: t("PociteljTransferCijena")
    },
    {
      imageUrl: '/taxiimages/neum.jpg',
      altText: 'Third slide',
      label: t("NeumTransfer"),
      caption: t("NeumTransferCijena")
    }
  ];


  return (
    <div >

      <div>
        <TransfersHeader headertext={t("transfers")}></TransfersHeader>
        <Divider style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Chip label={t("transfersLocation")} size="small" />
        </Divider>
        <Vehicles t1={t("Transfers")} t2={t("transfersLocation")} slides={slides}></Vehicles>
        <Footer></Footer>

      </div>
    </div>

  );
};

export default Transfer;
