export const styles = {
  main: {
    width: "100%",
    height: "100%",
    fontFamily: "Noto Sans KR",
  },
  title: {
    marginTop: "20px",
    fontWeight: "500",
    fontSize: "18px",
  },
  table: {
    width: "100%",
    height: "665px",
    marginTop: "40px",
  },

  // Table Header styles
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "27px",
    borderBottom: "0.75px solid #515154",
  },
  tableHeader_category: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "100%",
    fontSize: "10px",
    fontWeight: "500",
  },
  tableHeader_indicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "100%",
    fontSize: "10px",
    fontWeight: "500",
  },
  tableHeader_subIndicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "100%",
    fontSize: "10px",
    fontWeight: "500",
  },
  tableHeader_score: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
    height: "100%",
    fontSize: "10px",
    fontWeight: "500",
  },
  tableHeader_percentage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    width: "237px",
    height: "100%",
    fontSize: "8px",
    fontWeight: "300",
  },

  // Arrow Component styles
  arrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow_left: {
    width: "5px",
    height: "5px",
    borderTop: "1px solid #D2D2D7",
    borderLeft: "1px solid #D2D2D7",
    transform: "rotate(-45deg)",
    position: "fixed",
    left: "5px",
  },
  arrow_right: {
    width: "5px",
    height: "5px",
    borderTop: "1px solid #D2D2D7",
    borderRight: "1px solid #D2D2D7",
    transform: "rotate(45deg)",
    position: "fixed",
    right: "5px",
  },
  arrow_line: {
    width: "110px",
    height: "1px",
    backgroundColor: "#D2D2D7",
  },

  // tableContent styles
  tableContent: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    fontWeight: "300",
    fontSize: "10px",
  },
  tableContent_category: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px",
  },
  tableContent_indicatorContainer: {
    width: "445px",
  },

  // Indicator Component styles
  indicator: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  indicator_title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    borderBottom: "0.75px solid #D2D2D7",
    borderLeft: "0.75px solid #D2D2D7",
    borderRight: "0.75px solid #D2D2D7",
  },
  indicator_content: {
    width: "375px",
    height: "100%",
  },

  // SubTitleComponent styles

  subTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "27px",
    borderBottom: "0.75px solid #D2D2D7",
  },
  subTitle_title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "80px",
    borderRight: "0.75px solid #D2D2D7",
  },
  subTitle_percentage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "60px",
    borderRight: "0.75px solid #D2D2D7",
  },
  subTitle_sliderContainer: {
    display: "flex",
    flexDirection: "row",
    width: "235px",
    height: "100%",
    position: "relative",
  },
  subTitle_sliderContainer_low: {
    width: "70.5px",
    height: "100%",
    backgroundColor: "#EAFBF6",
    borderRight: "0.75px dashed #D2D2D7",
  },
  subTitle_sliderContainer_middle: {
    width: "94px",
    height: "100%",
  },
  subTitle_sliderContainer_high: {
    width: "70.5px",
    height: "100%",
    backgroundColor: "#E9F6F5",
    borderLeft: "0.75px dashed #D2D2D7",
  },
  subTitle_sliderContainer_circle: {
    position: "absolute",
    top: "30%",
    left: "100%",
    width: "10px",
    height: "10px",
    backgroundColor: "#00CBA1",
    borderRadius: "100%",
  },
};
