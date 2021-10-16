import React, { useState } from "react";
import "./Home.scss";
import CustomModal from "../Common/Modal/CustomModal";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="home-layout ">
        <div className="hero-layout s1 p-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-warning" onClick={handleShow}>
            Modal
          </button>
        </div>
      </div>

      <CustomModal
        show={show}
        rootClose={handleClose}
        headerText="Custom Modal"
        bodyContent={
          <>
            <h4 className="text-danger m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              itaque laboriosam molestias eos quasi asperiores, praesentium,
              vero delectus placeat odit, debitis ex necessitatibus provident.
              Soluta, omnis odio cumque error obcaecati, libero sequi fugiat
              accusamus sint sapiente placeat suscipit. Eveniet, unde.
            </h4>
          </>
        }
        footerActions={[handleClose, () => console.log("Hit Save!")]}
        primaryLabel="Save"
        secondaryLabel="Cancel"
      />
    </>
  );
}

export default Home;
