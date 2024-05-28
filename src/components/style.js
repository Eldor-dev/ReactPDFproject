// Create styles

export const styles = {
  page: {
    // width: "595px",
    // height: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "0px",
    // margin: "0px",
  },
  greenBackground: {
    margin: "0",
    width: "100%",
    flex: "1",
    // height: "475px",
    backgroundColor: "#00CBA1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greenBackgroundImage: {
    width: "287px",
    height: "44px",
  },
  mainPageLayout: {
    flex: "1",
    width: "402px",
    height: "348px",
    marginTop: "44px",
    fontFamily: "Noto Sans KR",
  },
  mainPageHeaderText: {
    color: "#1D1D1F",
    fontSize: "19px",
    fontWeight: "400",
  },
  mainPageGradientText: {
    backgroundClip: "linear-gradient(#01af9c, #00e6a5)",
    color: "#00CBA1",
    // webkitBackgroundClip: "text",
    // backgroundClip: "text",
    // webkitTextFillColor: "transparent",
    fontSize: "19px",
    fontWeight: "400",
  },
  mainPageText: {
    color: "#6E6E73",
    fontSize: "8px",
    fontWeight: "400",
    marginBottom: "12px",
    marginTop: "12px",
  },
  mainPageContent: {
    display: "flex",
    flexDirection: "row",
    gap: "7px",
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageContent_boxOne: {
    flex: "1",
    display: "flex",
    textAlign: "center",
    padding: "11px",
    border: "0.2px solid grey",
    borderRadius: "5px",
    // height: "170px",
  },
  mainPageContent_boxOne_atSign: {
    color: "#6E6E73",
    fontSize: "4.3px",
  },
  mainPageContent_boxTwo: {
    flex: "2",
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    padding: "11px",
    height: "170px",
    border: "0.3px solid grey",
    borderRadius: "5px",
  },
  mainPageContent_boxTwo_content: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    color: "#6E6E73",
    fontSize: "9px",
  },
  sliderTitleContainer: {
    width: "100%",
    marginTop: "15.5px",
    marginBottom: "9px",
    display: "flex",
    justifyContent: "start",
  },
  sliderTitle: {
    color: "#00CBA1",
    fontSize: "7.5px",
    fontWeight: "400",
  },
  sliderContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
  },

  sliderContent: {
    width: "100%",
    fontSize: "5.2px",
    marginBottom: "4.6px",
  },
  sliderContent_text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "1D1D1F",
    width: "100%",
    // backgroundColor: "red",
  },
  sliderContent_slider: {
    width: "100%",
    height: "6.2px",
    backgroundColor: "#F5F5F7",
    borderRadius: "5px",
    marginTop: "3px",
  },
  sliderContent_slider_color: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: "5px",
    backgroundColor: "#00CBA1",
  },
  sliderContent_slider_circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "13px",
    height: "13px",
    border: "0.5px solid #00CBA1",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  sliderContent_slider_circle_label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "8px",
    height: "8px",
    backgroundColor: "#00CBA1",
    borderRadius: "50%",
  },
  sliderContent_slider_circle_label_text: {
    fontSize: "5.2px",
    color: "white",
  },
  sliderContent_TestDate: {
    marginTop: "13px",
    alignSelf: "flex-start",
    color: "#6E6E73",
    fontSize: "3.7px",
  },
};

export const styleHeader = {
  header: {
    width: "100%",
    // height: "44px",
    // padding: "10px, 20px, 10px, 20px",
    marginBottom: "10px",
  },
  image: {
    width: "287px",
    height: "44px",
    marginTop: "10px",
    marginLeft: "20px",
    // gap: "12px",
    // opacity: "0px",
    // left: "20px",
    // top: "10px",
  },
};

// Style Layout
export const styleLayout = {
  layout: {
    flex: "1",
    width: "493px",
    height: "374px",
    marginBottom: "35px",
    // backgroundColor: "green",
  },
  // layoutHeader: {
  //   // width: "181px",
  //   // height: "40px",
  //   backgroundColor: "yellow",
  // },
  layoutContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0px",
    height: "100%",
    // backgroundColor: "red",
  },

  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "#D2D2D7",
    marginBottom: "35px",
  },

  layoutTitle: {
    flex: "1",
    // backgroundColor: "red",
  },
  layoutContent: {
    // flex: "1",
    width: "363px",
    height: "100%",
    // backgroundColor: "green",
  },
  layoutTwoColumn: {
    display: "flex",
    gap: "40px",
    flexDirection: "row",
    width: "363px",
    height: "100%",
  },
  layoutTwoColumnContent: {
    flex: "1",
  },
};

// Style Text
export const styleText = {
  headerText: {
    fontFamily: "Noto Sans KR",
    fontSize: "19px",
    fontWeight: "400",
    color: "#1D1D1F",
    marginBottom: "20px",
  },
  titleDark: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "12px",
    fontWeight: "400",
    color: "#1D1D1F",
    // lineHeight: "14.32px",å
    marginTop: "0px",
  },
  titleDarkGray: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "12px",
    fontWeight: "400",
    color: "#6E6E73",
    marginTop: "0px",
    marginBottom: "10px",
  },
  emoji: {
    width: "100px",
    height: "13px",
  },
  textDark: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "9px",
    fontWeight: "400",
    color: "#1D1D1F",
    marginTop: "20px",
    marginBottom: "20px",
    // width: "100%",
    textAlign: "justify",
  },
  textBrandText: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "9px",
    fontWeight: "400",
    color: "#01AF9C",
    marginTop: "20px",
    marginBottom: "10px",
    // width: "100%",
    textAlign: "justify",
  },
};

// Style List

export const styleList = {
  container: {
    marginTop: "10px",
    marginBottom: "10px",
    // backgroundColor: "green",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "0",
  },
  bullet: {
    height: "100%",
    color: "#FF382B",
    fontSize: "13px",
    // width: "2.93px",
    // left: "3.15px",
    // height: "2.93px",
    // top: "3.15px",
  },
  titleText: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "9px",
    fontWeight: "400",
    color: "#FF382B",
    marginTop: "0px",
    marginBottom: "0px",
    // width: "100%",
    textAlign: "justify",
  },
  text: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "9px",
    fontWeight: "400",
    color: "#1D1D1F",
    marginTop: "0px",
    marginBottom: "0px",
    // width: "100%",
    textAlign: "justify",
    marginLeft: "10px",
    marginBottom: "0",
  },
};

export const styleOrderedText = {
  container: {
    width: "100%",
    height: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    gap: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    // gap: "5px",
    // marginBottom: "0",
  },
  bullet: {
    height: "100%",
    // color: "#FF382B",
    fontSize: "13px",
    // width: "2.93px",
    // height: "2.93px",
    // top: "3.15px",
    // left: "3.15px",
  },
  titleText: {
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    fontSize: "9px",
    fontWeight: "400",
    color: "#1D1D1F",
    marginTop: "0px",
    marginBottom: "0px",
    // width: "100%",
    textAlign: "justify",
  },
};

export const styleBox = {
  box: {
    border: "1px solid #D2D2D7",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "30px",
  },
};
