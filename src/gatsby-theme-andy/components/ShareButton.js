import React, { Component } from "react";

import { ToastContainer, toast, Flip } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

export default class ShareButton extends Component {
  thisclass = () => {
    navigator.clipboard.writeText(
      window.location.hostname +
        (window.location.port === "" ? "" : ":" + window.location.port) +
        (this.props.link === "about" ? "" : "/" + this.props.link)
    );
    toast.success("Single page link copied!");
  };

  render() {
    return (
      <div>
        <p onClick={this.thisclass} style={{ cursor: "pointer" }}>
          🔗
        </p>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
          transition={Flip}
        />
      </div>
    );
  }
}
