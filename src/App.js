import { useState } from "react";
import "./App.css";
// import { MyDocument, PDF } from "./components/PDFFile";

import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { PDFDocument } from "./pdfDocument/PDFDocument.js";

const styles = StyleSheet.create({
  viewer: {
    display: "flex",
    textAlign: "center",
    margin: "auto",
    width: "100%",
    height: "100vh",
  },
});

function App(props) {
  return (
    // <PDFPage />
    // <div className="App">
    //   {/* <PDFDownloadLink document={<MyDocument />} fileName="FORM.pdf">
    //     {/* {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)} */}
    //     {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download now!")}
    //   </PDFDownloadLink>
    // </div> */}

    <PDFViewer style={styles.viewer}>
      <PDFDocument />
    </PDFViewer>
  );
}

export default App;
