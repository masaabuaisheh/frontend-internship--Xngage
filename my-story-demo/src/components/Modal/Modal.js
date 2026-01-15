import "./Modal.css";

export default function Modal({ isOpen, close, title, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={close}></div>
      <div className="popup">
        {title && <h1 className="title">{title}</h1>}
        {children}
      </div>
    </>
  );
}
