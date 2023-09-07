import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./Page";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
