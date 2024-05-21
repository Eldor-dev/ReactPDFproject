import { React } from "react";
import { Document, Page, Text, View, StyleSheet, Image, Font, Tspan, Svg } from "@react-pdf/renderer";

import { secondPageData } from "../data/data";
import { styles, styleHeader, styleLayout, styleList, styleText } from "./style.js";
import pdfFrame from "../static/images/pdf_frame.png";
import pdfFrameWhite from "../static/images/pdf_frame_white.png";
import pdfEmoji1 from "../static/images/pdf_emoji1.png";
import pdfEmoji2 from "../static/images/pdf_emoji2.png";
import pdfEmoji3 from "../static/images/pdf_emoji3.png";
import pdfEmoji4 from "../static/images/pdf_emoji4.png";
import "./style.js";

// Register Font
// Font.register({ family: "Nanum Gothic", src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf" });
Font.register({ family: "Noto Sans", src: "https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf" });
// Font.register({ family: "pretendard", src: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" });

// List Item
const ListItem = ({ title, text, color }) => {
  return (
    <View style={styleList.container}>
      <View style={styleList.title}>
        <Text style={[styleList.bullet, { color: color }]}>{"\u2022" + " "}</Text>
        <Text style={[styleList.titleText, { color: color }]}>{title}</Text>
      </View>
      <Text style={[styleText.textDarkGray, { marginLeft: "10px", marginBottom: "0" }]}>{text}</Text>
    </View>
  );
};

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.viewFirst}>
        <Image style={styles.image} src={pdfFrame} />
      </View>
      <View style={styles.viewSecond}>
        <Text style={styles.textFirst}>안녕하세요.</Text>
        <Text style={styles.textSecond}>겁이 없는 수련자</Text>
      </View>
    </Page>

    <Page style={styles.page} wrap={false}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>

      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>전성윤님의 유형 요약</Text>

        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji1} style={[styleText.emoji, { width: "80px" }]} />
            <Text style={styleText.titleDarkGray}>세상은 나만의 무대, 나는 나만의 주인공.</Text>
            <Text style={styleText.textDarkGray}>
              자유분방하고 도전을 좋아하는 대담한 성격입니다. 하고 싶은 것은 누가 뭐라고 하던 다 해야 직성이 풀리는 편이에요. 새롭고 낯선 것을 두려워하지 않고 우선 도전하는 것을 좋아해요. 다른 사람의 시선이나 기존의 관습을 신경 쓰지 않고 원하는 것을 이루어 내고자 합니다. 꼼꼼히 계획하기 보다는, 나의
              직감을 믿고 즉흥적이고 유연하게 대처해요. 그러나 이러한 성향으로 인해 때로는 위험을 과소평가하거나 실수를 범할 수도 있습니다. 주변 사람들에게도 ‘자신만의 길을 가는’ 대담한 모습으로 비춰질 것입니다. 내가 원하는바를 향해 끊임없이 나아가고, 주변의 인정을 받지 못하더라도 혼자 자신만의 길을
              걷는 것을 두려워하지 않아요. 예측 불가능하면서 주도적인 모습이 매력적이면서도, 이러한 과정에서 가까운 사람들은 때로 서운함을 느낄 수 있어요. 상대를 배려하기 보다는 자신의 목표를 먼저 생각하는, 차가운 사람으로 느껴질 수 있기 때문이에요.
            </Text>

            <Text style={styleText.textDarkGray}>
              자유분방하고 도전을 좋아하는 대담한 성격입니다. 하고 싶은 것은 누가 뭐라고 하던 다 해야 직성이 풀리는 편이에요. 새롭고 낯선 것을 두려워하지 않고 우선 도전하는 것을 좋아해요. 다른 사람의 시선이나 기존의 관습을 신경 쓰지 않고 원하는 것을 이루어 내고자 합니다. 꼼꼼히 계획하기 보다는, 나의
              직감을 믿고 즉흥적이고 유연하게 대처해요. 그러나 이러한 성향으로 인해 때로는 위험을 과소평가하거나 실수를 범할 수도 있습니다. 주변 사람들에게도 ‘자신만의 길을 가는’ 대담한 모습으로 비춰질 것입니다. 내가 원하는바를 향해 끊임없이 나아가고, 주변의 인정을 받지 못하더라도 혼자 자신만의 길을
              걷는 것을 두려워하지 않아요. 예측 불가능하면서 주도적인 모습이 매력적이면서도, 이러한 과정에서 가까운 사람들은 때로 서운함을 느낄 수 있어요. 상대를 배려하기 보다는 자신의 목표를 먼저 생각하는, 차가운 사람으로 느껴질 수 있기 때문이에요.
            </Text>
            <Text style={styleText.textBrandText}>‘자기 마음 먹은 대로 모든 일을 하는 사람’이지만, 이 말이 칭찬이 될지 비판이 될지는 나의 노력에 달렸습니다.</Text>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              수련자<Tspan style={styleText.titleDarkGray}> 성격</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutContent}>
            <Image src={pdfEmoji2} style={[styleText.emoji, { width: "114px" }]} />
            <Text style={styleText.titleDarkGray}>내 자신을 넘어서려는 당신.</Text>
            <Text style={styleText.textDarkGray}>
              자신의 타고난 기질을 극복하고 더 좋은 사람이 되기 위해 끊임없이 고민하는 성향이에요. 더 나은 내가 되고자 하는 마음이 크면서도, 그 방법을 알지 못해 답답한 마음이 계속되고 있을 수 있겠어요. 막연한 가려움이 느껴지는데 원인이 어디인지, 그래서 어디를 어떻게 긁어야 편안해지는 것일지 알지
              못하는 마음과 비슷할 수 있어요. 이 불편함이 오랜 시간 지속되다 보면, 이것을 고칠 수 있는 힘이 나에게 없다고 느끼며 스스로에 대한 믿음도 떨어질 수 있습니다.  정신적이거나 추상적인 것에 관심을 가지려 하며, 이상적인 모습을 꿈꾸는 경향도 있어요. 하지만 스스로나 주변을 현실적이고 객관적으로
              바라보는 노력은 상대적으로 적을 수 있습니다. 막연한 이상과 불분명한 현실 사이에서 내가 원하는 바를 명확히 파악하고, 이를 위해 노력하는 것이 어려울 수밖에 없습니다.
            </Text>
            <Text style={styleText.textDarkGray}>
              정신적이거나 추상적인 것에 관심을 가지려 하며, 이상적인 모습을 꿈꾸는 경향도 있어요. 하지만 스스로나 주변을 현실적이고 객관적으로 바라보는 노력은 상대적으로 적을 수 있습니다. 막연한 이상과 불분명한 현실 사이에서 내가 원하는 바를 명확히 파악하고, 이를 위해 노력하는 것이 어려울 수밖에
              없습니다.
            </Text>
            <Text style={styleText.textBrandText}>스스로를 자책하기 보다는 좀 더 자신을 믿어 주세요.</Text>
          </View>
        </View>
      </View>
    </Page>

    <Page style={styles.page}>
      <View style={styleHeader.header}>
        <Image style={styleHeader.image} src={pdfFrameWhite} />
      </View>
      <View style={styleLayout.layout}>
        <Text style={styleText.headerText}>홍길동님의 강점과 약점</Text>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              겁이 없는<Tspan style={styleText.titleDarkGray}> 기질</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutTwoColumn}>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji3} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#FF382B"}></ListItem>
              ))}
            </View>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji4} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#356DF8"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styleLayout.layout}>
        <View style={styleLayout.layoutContainer}>
          <View style={styleLayout.layoutTitle}>
            <Text style={styleText.titleDark}>
              수련자<Tspan style={styleText.titleDarkGray}> 성격</Tspan>
            </Text>
          </View>
          <View style={styleLayout.layoutTwoColumn}>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji3} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#FF382B"}></ListItem>
              ))}
            </View>
            <View style={styleLayout.layoutTwoColumnContent}>
              <Image src={pdfEmoji4} style={[styleText.emoji, { width: "60px" }]} />
              {secondPageData.map((item) => (
                <ListItem title={item.title} text={item.text} color={"#356DF8"}></ListItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page></Page>
    <Page></Page>
    <Page></Page>
    <Page></Page>
    <Page></Page>
  </Document>
);
