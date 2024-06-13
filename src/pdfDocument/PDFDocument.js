import { React } from "react";
import { Document, Font } from "@react-pdf/renderer";

import MainPage from "../pages/mainPage/MainPage.js";
import FirstPage from "../pages/firstPage/FirstPage.js";
import FirstPageSecondPart from "../pages/firstPageSecondPart/FirstPageSecondPart.js";
import SecondPage from "../pages/secondPage/SecondPage.js";
import ThirdPage from "../pages/thirdPage/ThirdPage.js";
import FourthPage from "../pages/fourthPage/FourthPage.js";
import FifthPage from "../pages/fifthPage/FifthPage.js";
import SixthPage from "../pages/sixthPage/SixthPag.js";
import SeventhPage from "../pages/seventhPage/SeventhPage.js";
import EighthPagePartOne from "../pages/eighthPagePartOne/EighthPagePartOne.js";
import EighthPagePartTwo from "../pages/eighthPagePartTwo/EighthPagePartTwo.js";
import NinthPage from "../pages/ninthPage/NinthPage.js";

Font.register({
  family: "Noto Sans KR",
  fonts: [
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf", fontWeight: 900 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf", fontWeight: 700 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf", fontWeight: 500 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf", fontWeight: 300 },
    { src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf", fontWeight: 100 },
  ],
});

// Create Document Component
export const PDFDocument = () => (
  <Document>
    <MainPage />
    <FirstPage />
    <FirstPageSecondPart />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
    <SixthPage />
    <SeventhPage />
    <EighthPagePartOne />
    <EighthPagePartTwo />
    <NinthPage />
  </Document>
);
