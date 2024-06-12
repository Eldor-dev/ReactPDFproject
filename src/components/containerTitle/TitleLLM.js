import { View, Text, Tspan } from "@react-pdf/renderer";
import { styles } from "./styles";

function TitleLLM() {
  return (
    <View style={styles.title}>
      <Text>
        <Tspan>혁신가 </Tspan>
        <Tspan>- LLM</Tspan>
        <Tspan style={{ color: "#6E6E73" }}> {`  성격`}</Tspan>
      </Text>
    </View>
  );
}

export default TitleLLM;
