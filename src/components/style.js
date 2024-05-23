// Create styles

export const styles = {
  page: {
    width: "595px",
    height: "1200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    margin: "0px",
  },
  viewFirst: {
    margin: "0",
    width: "100%",
    flex: "1",
    // height: "475px",
    backgroundColor: "#00CBA1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "287px",
    height: "44px",
  },
  viewSecond: {
    flex: "1",
    width: "402px",
    height: "348px",
    // fontFamily: "Noto Sans KR",
    fontFamily: "Noto Sans KR",
    // backgroundColor: "#00CB22",
  },
  textFirst: {
    top: "44.01px",
    color: "#1D1D1F",
    fontSize: "19px",
    fontWeight: "700",
    // width: "92px",
    // height: "23px",
    // color: "red",
    // left: "96.07px",
    // lineHeight: "22.93px",
    // textAlign: "left",
  },
  textSecond: {
    background: "linear-gradient(90deg, #01af9c, #00e6a5)",
    // webkitBackgroundClip: "text",
    // backgroundClip: "text",
    // webkitTextFillColor: "transparent",
    fontSize: "19px",
    fontWeight: "700",
    top: "70",
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
    marginTop: "30px",
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
    marginTop: "0px",
    marginBottom: "10px",
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
    border: "1px solid #6E6E73",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "30px",
  },
};
