import { View, Page, Text, Tspan } from "@react-pdf/renderer";

import { pageNumber } from "../../data/data.js";
import CopyRight from "../../components/copyRight/CopyRight";
import HeaderLogo from "../../components/headerBrand/HeaderBrand.js";
import { styles } from "./styles.js";

function PageContainer({ children, page }) {
  console.log(page);
  return (
    <Page>
      <HeaderLogo />
      <View style={styles.main}>
        <View style={styles.mainContent}>{children}</View>
        <View style={styles.pageNumberContainer}>
          <View style={styles.pageNumberContent}>
            {pageNumber.map((item, index) => (
              <PageNumber page={page} number={item.number} text={item.text} index={index} key={index} />
            ))}
          </View>
        </View>
      </View>
      <CopyRight />
    </Page>
  );
}

export default PageContainer;

/// PageNumber

function PageNumber({ number, text, page, index }) {
  return (
    <View style={page === index + 1 ? [styles.box, { backgroundColor: "#00CBA1" }] : styles.box}>
      {page === index + 1 ? <Tspan style={styles.box_arrow} /> : null}
      <View style={styles.box_number}>
        <Text>{number}</Text>
      </View>
      <View style={styles.box_text}>
        {text.split("").map((char, index) => (
          <Text key={index}>{char}</Text>
        ))}
      </View>
    </View>
  );
}

// export const VerticalText = ({ text, number, page, index }) => {
//   return (
//     <View style={index + 1 == page ? [stylePageNumber.textContainer, { backgroundColor: "#00CBA1" }] : stylePageNumber.textContainer}>
//       {index + 1 == page ? <Tspan style={stylePageNumber.arrow} /> : null}
//       <Text style={stylePageNumber.number}>{number}</Text>
//       <View style={stylePageNumber.text}>
//         {text.split("").map((char) => (
//           <Text>{char}</Text>
//         ))}
//       </View>
//     </View>
//   );
// };
// export const stylePageNumber = {
//   container: {
//     position: "absolute",
//     right: "0px",
//     top: "72px",
//     // transform: "rotate(-90deg)",
//     width: "25px",
//     height: "567px",
//     margin: "0px",
//     padding: "0",
//   },
//   textContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     color: "#FFF",
//     alignItems: "center",
//     padding: "7px",
//     width: "25px",
//     height: "81px",
//     backgroundColor: "#D9D9D9",
//   },
//   arrow: {
//     position: "absolute",
//     left: "-4px",
//     transform: "rotate(45deg)",
//     width: "8px",
//     height: "8px",
//     backgroundColor: "#00CBA1",
//   },
//   text: {
//     flex: 1,
//     flexDirection: "column",
//     fontFamily: "Noto Sans KR",
//     fontSize: "7.5px",
//   },
//   number: {
//     fontSize: "11px",
//     margin: "0",
//     padding: "0",
//   },
// };
