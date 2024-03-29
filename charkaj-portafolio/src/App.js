import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./Page";

const pages = ["about", "portofolio", "contact", "resume"];

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div className="wrapper">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
