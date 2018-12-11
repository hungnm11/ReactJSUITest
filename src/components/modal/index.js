/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap';

const ModalUI = ({
	isOpen,
	toggle,
	detail
}) => {
	const { title, image, desc } = detail;
	return (
		<Modal isOpen={isOpen} toggle={toggle.bind(this, '', '', '')} >
			<ModalHeader toggle={toggle}>{title}</ModalHeader>
			<ModalBody>
				<CardImg src={image} />
				{desc}
			</ModalBody>
			<ModalFooter>
				<Button color="secondary" onClick={toggle.bind(this, '', '', '')}>Close</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ModalUI;