import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmationPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Modal centered className="dcr-success" show={this.props.show}>
          <Modal.Body className="text-center">
            <div className="lottieanimation dcr-anim"></div>
            <div className="popupPad masterconfirm-popup">
              <h5 className="popupPad1">Are You Sure?</h5>
              <div className="approve">{this.props.msg}</div>
            </div>
            <div className="successmsg">
              <Button
                variant="secondary"
                className="cancelBtn master-cancelbtn"
                onClick={this.props.onHideConfirmationPopup}
              >
                No
              </Button>
              <Button
                variant="primary"
                className="CandidateOkButtonRejectPopup"
                onClick={this.props.onUpdateConfirmationPopup}
              >
                Yes
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ConfirmationPopup;
