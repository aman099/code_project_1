import Form from "../contact us/Form";
import "./Modal.scss";
import "../contact us/ContactUs.scss";

import modalCloseBtn from "../../assets/modal/Close_Btn_Modal.svg";
import { useRef } from "react";

function Modal({ modalState, setModalState }) {
  const modalContainerRef = useRef(null);

  if (!modalState) return;

  function setModalState2(e) {
    // if (e.target === modalContainerRef.current) return;
    setModalState(false);
  }

  return (
    <div
      onClick={setModalState2}
      id="modal"
      className={`${modalState ? "active" : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={modalContainerRef}
        className="modal-container"
      >
        <div className="left-modal">
          <div className="up-left">
            <div className="heading">
              <h2>Contact Us</h2>
            </div>
            <p className="para-1">
              Get in touch with us with any sort of query. One of our <br />{" "}
              team member will contact you soon.
            </p>
            <p className="para-2">
              All of your information will not be shared with any third <br />
              party, your information is completely confidential with us.
            </p>
          </div>
          <div className="down-left">
            <pre>Feel free to get in touch with us via</pre>
            <a href="#">
              <span></span> examplehelp@gmail.com
            </a>
            <a href="#">
              <span></span> 1234 567 890
            </a>
          </div>
        </div>
        <div className="right-modal">
          <Form />
          <div
            onClick={(e) => setModalState2()}
            className="close-btn-modal-container"
          >
            <img src={modalCloseBtn} alt="Closing modal btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
