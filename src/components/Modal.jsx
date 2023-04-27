const Backdrop = ({ onCloseModal }) => {
  return (
    <div
      onClick={onCloseModal}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-black opacity-75"></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-20 left-[63%] w-[20%] bg-white rounded-lg z-20 shadow-md">
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
