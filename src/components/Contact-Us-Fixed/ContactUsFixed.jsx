import { useState } from "react";
import "./ContactUsFixed.scss";

function ContactUsFixed({ captureModalState }) {
  const [modalOpen, setModalOpen] = useState(false);

  function popModal() {
    console.log("Modal Opened");
    setModalOpen(true);
    captureModalState(modalOpen);
  }

  return (
    <button id="contact-us-btn" onClick={() => popModal()}>
      Contact Us
    </button>
  );
}

export default ContactUsFixed;
