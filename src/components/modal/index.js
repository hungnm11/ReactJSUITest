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
		const { isOpen, toggle, detail } = this.props;
		return (
			<Modal isOpen={isOpen} toggle={toggle.bind(this, '', '', '')} >
				<ModalHeader toggle={toggle}>{detail.title}</ModalHeader>
				<ModalBody>
					<CardImg src={detail.image} />
					{detail.desc}
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggle.bind(this, '', '', '')}>Close</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default ModalUI;