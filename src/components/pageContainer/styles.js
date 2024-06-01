import { pageNumber } from "../../data/data";

export const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "758px",
  },
  mainContent: {
    width: "560px",
    height: "100%",
    paddingLeft: "35px",
    paddingRight: "20px",
  },

  pageNumberContainer: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    width: "35px",
    height: "100%",
  },
  pageNumberContent: {
    width: "28px",
    height: "100%",
  },

  // PageNumber Component Styles
  box: {
    width: "100%",
    backgroundColor: "#EBEBF0",
    marginBottom: "1px",
    fontWeight: "700",

    color: "#FFFFFF",
  },
  box_number: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "12px",
    height: "14px",
    margin: "5px 8px 0px 8px",
    fontSize: "10px",
  },
  box_text: {
    width: "7px",
    // height: "54px",
    fontFamily: "Noto Sans KR",
    margin: "4px 10.5px 5px 10.5px",
    fontSize: "8px",
  },
  box_arrow: {
    position: "absolute",
    left: "-4.5px",
    top: "45%",
    transform: "rotate(45deg)",
    width: "9px",
    height: "9px",
    backgroundColor: "#00CBA1",
  },
};
