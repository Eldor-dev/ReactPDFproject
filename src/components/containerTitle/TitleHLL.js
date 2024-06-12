import { View, Text, Tspan } from "@react-pdf/renderer";
import { styles } from "./styles";

function TitleHLL() {
  return (
    <View style={styles.title}>
      <Text>
        <Tspan>정의로운 </Tspan>
        <Tspan>- HLL</Tspan>
        <Tspan style={{ color: "#6E6E73" }}> {`  기질`}</Tspan>
      </Text>
    </View>
  );
}

export default TitleHLL;
