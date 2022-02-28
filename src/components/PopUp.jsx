import ReactDOM from 'react-dom';
import './styles.css';
export default function PopUp({ isOpen, closeModal, children }) {
	const handleModalContainerClick = (e) => e.stopPropagation();
	return ReactDOM.createPortal(
		<article className={`${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<div className="modal-close">
					<button className="input" onClick={closeModal}>
						X
					</button>
				</div>
				{children}
			</div>
		</article>,
		document.getElementById('modal')
	);
}
