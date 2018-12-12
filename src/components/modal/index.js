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

	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		const { detail } = this.props;
		const img = detail.image;

		if (this.animating) return;
		const nextIndex = this.state.activeIndex === img.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		const { detail } = this.props;
		const img = detail.image;
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? img.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}


	render() {
		const { isOpen, onClickClose, detail } = this.props;
		const img = detail.image;
		const { activeIndex } = this.state;

		const slides = img.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} className="img-fluid" />
					<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
				</CarouselItem>
			);
		});

		return (
			<Modal isOpen={isOpen} toggle={onClickClose} >
				<ModalHeader toggle={onClickClose}>{detail.title}</ModalHeader>
				<ModalBody>

					
					<Carousel
						activeIndex={activeIndex}
						next={this.next}
						previous={this.previous}
					>
						<CarouselIndicators items={img} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
						{slides}
						<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
						<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
					</Carousel>

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