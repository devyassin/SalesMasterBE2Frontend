import { Image, Text, View, StyleSheet } from "@react-pdf/renderer";

import { tw } from "../../../constants/styling";


type Props = {};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
  },
});
const CardInfoDetailPDF = (props: Props) => {
  return (
    <div className="">
      <Text style={tw("text-[36px] p-4 tajwal")}>Facture</Text>
      <View>
        <Image
          style={styles.image}
          src="https://cdn-07.9rayti.com/rsrc/cache/widen_750/uploads/2015/11/Qu%E2%80%99est-ce-qu%E2%80%99une-entreprise-296.jpg"
        />
      </View>
    </div>
  );
};

export default CardInfoDetailPDF;
