import React from "react";
import { Modal } from "react-bootstrap";
import "./CustomModal.scss";

/**
 *
 * @param { show } Boolean control the visibility of the modal
 * @param { showCloseBtn } Boolean control whether to show the close button on the header.
 * @param { centered } Boolean whether to center the dialog vertically.
 * @param { size } Boolean modal's size *
 *
 * @param { className } CSS Classname to add to the dialog
 *
 * @param { rootClose } Function whether user can close the modal by clicking outside. Must flip the 'show state'.
 *
 * @param { headerText } String text to show on the header
 * @param { primaryLabel } String the label of the primary Action btn
 * @param { secondaryLabel } String the label of the secondary Action btn
 *
 * @param { bodyContent } Node JSX template to show in the modal body
 *
 * @param { footerActions } Array Array of 2 funtions
 * [secondaryAction: should close modal mandatorily, primaryAction: action for the right btn]
 * if not provided, rootClose is mandatory.
 */

function CustomModal({
  show,
  showCloseBtn = false,
  centered = true,
  size = "lg",
  className = "",
  rootClose,
  headerText = "",
  primaryLabel = "",
  secondaryLabel = "",
  bodyContent,
  footerActions = null,
}) {
  return (
    <Modal
      show={show}
      size={size}
      centered={centered}
      onHide={rootClose}
      dialogClassName={className}
    >
      <Modal.Header closeButton={showCloseBtn || !footerActions}>
        <Modal.Title className="m-0">{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyContent}</Modal.Body>
      {footerActions && (
        <Modal.Footer className="custom-modal-footer d-flex flex-row justify-content-space-between">
          <button
            className="btn btn-default btn-link btn-default"
            onClick={footerActions?.[0]}
          >
            {secondaryLabel}
          </button>
          <div className="divider"></div>
          <button
            className="btn btn-default btn-link btn-danger"
            onClick={footerActions?.[1]}
          >
            {primaryLabel}
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default CustomModal;
