import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { useState } from "react";


function App() {

  // modal의 on/off 상태
  // setModalShow 함수
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="app">
      <Header />
      <Main setModalShow={setModalShow} />
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}
export default App;