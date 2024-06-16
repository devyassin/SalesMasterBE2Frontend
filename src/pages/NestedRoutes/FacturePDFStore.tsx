import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import CardInfoDetailPDF from "../../components/ui/cards/CardInfoDetailPDF";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    color: "#FFFFFF",
  },
});

const FacturePDF = () => {
  const clientData = [
    { label: "Nom", value: "client.nom " },
    { label: "Email address", value: "client.email" },
    { label: "Phone number", value: "client.telephone" },
    { label: "Address", value: "client.adresse " },
  ];
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <CardInfoDetailPDF />
      </Page>
    </Document>
  );
};

const FacturePDFStore = () => {
  return (
    <PDFViewer className="w-full h-full  px-20" showToolbar={true}>
      <FacturePDF />
    </PDFViewer>
  );
};

export default FacturePDFStore;
