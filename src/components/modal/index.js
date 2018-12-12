/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter, 
	CardImg,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

class ModalUI extends Component {
	render() {
		const { isOpen, onClickClose, detail } = this.props;
		return (
			<Modal isOpen={isOpen} toggle={onClickClose} >
				<ModalHeader toggle={onClickClose}>{detail.title}</ModalHeader>
				<ModalBody>
					<CardImg src={detail.image[0].src} />
					{detail.description}
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={onClickClose}>Close</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default ModalUI;