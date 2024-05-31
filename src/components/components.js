import { Text, View, Tspan } from "@react-pdf/renderer";

import { styles, styleList, styleOrderedText, stylePageNumber } from "./style.js";

// List Item
export const ListItem = ({ title, text, color }) => {
  return (
    <View style={styleList.container} key={title}>
      <View style={styleList.title}>
        <Text style={[styleList.bullet, { color: color }]}>{"\u2022" + " "}</Text>
        <Text style={[styleList.titleText, { color: color }]}>{title}</Text>
      </View>
      <Text style={styleList.text}>{text}</Text>
    </View>
  );
};

// Ordered Text Item
export const OrderedText = ({ title, color }) => {
  return (
    <View style={styleOrderedText.content} key={title}>
      <Text style={styleOrderedText.bullet}>{"\u2022" + " "}</Text>
      <Text style={[styleOrderedText.titleText, { color: color }]}>{title}</Text>
    </View>
  );
};

// Slider Item
export const Slider = ({ percentage, label }) => {
  let sliderWidth = 0;

  if (percentage < 3) {
    sliderWidth = percentage + 11;
  } else if (percentage >= 3 && percentage < 6) {
    sliderWidth = percentage + 10.5;
  } else if (percentage >= 6 && percentage < 9) {
    sliderWidth = percentage + 10;
  } else if (percentage >= 9 && percentage < 12) {
    sliderWidth = percentage + 9.5;
  } else if (percentage >= 12 && percentage < 15) {
    sliderWidth = percentage + 9;
  } else if (percentage >= 15 && percentage < 20) {
    sliderWidth = percentage + 8;
  } else if (percentage >= 20 && percentage < 25) {
    sliderWidth = percentage + 7;
  } else if (percentage >= 25 && percentage < 30) {
    sliderWidth = percentage + 6;
  } else if (percentage >= 30 && percentage < 40) {
    sliderWidth = percentage + 5;
  } else if (percentage >= 40 && percentage < 50) {
    sliderWidth = percentage + 4;
  } else if (percentage >= 50 && percentage < 60) {
    sliderWidth = percentage + 3;
  } else if (percentage >= 60 && percentage < 70) {
    sliderWidth = percentage + 2;
  } else if (percentage >= 70 && percentage < 80) {
    sliderWidth = percentage + 1;
  } else if (percentage >= 80) {
    sliderWidth = percentage;
  }

  return (
    <View style={styles.sliderContent}>
      <View style={styles.sliderContent_text}>
        <Text>자극추구</Text>
        <Text style={{ textAlign: "end" }}>{`${percentage}%`}</Text>
      </View>
      <View style={styles.sliderContent_slider}>
        <View style={[styles.sliderContent_slider_color, { width: `${sliderWidth}%` }]}>
          <View style={styles.sliderContent_slider_circle}>
            <View style={styles.sliderContent_slider_circle_label}>
              <Text style={styles.sliderContent_slider_circle_label_text}>{label}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Vertical Text Item
export const VerticalText = ({ text, number, page, index }) => {
  return (
    <View style={index + 1 == page ? [stylePageNumber.textContainer, { backgroundColor: "#00CBA1" }] : stylePageNumber.textContainer}>
      {index + 1 == page ? <Tspan style={stylePageNumber.arrow} /> : null}
      <Text style={stylePageNumber.number}>{number}</Text>
      <View style={stylePageNumber.text}>
        {text.split("").map((char) => (
          <Text>{char}</Text>
        ))}
      </View>
    </View>
  );
};
