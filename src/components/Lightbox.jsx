import { useState, useRef, useEffect } from "react";
import styles from "./Lightbox.module.css";

const ProductThumbnail = ({ image, targetIndex, currentIndex }) => {
	return (
		<button
			className={`${styles.circle} ${
				currentIndex === targetIndex && styles.circleSelected
			}`}
			id={image.id}
		></button>
	);
};

const Lightbox = function ({
	images,
	// isLightboxOpen,
	// lightboxRef,
	handleCloseLightbox,
	isOpen,
	setIsOpen,
	toggleLightBox,
}) {
	const [index, setIndex] = useState(0);

	// console.log(isLightboxOpen);
	// lightboxRef.current.showModal();

	useEffect(() => {
		// lightboxRef.current.showModal();
	}, []);

	const handleSelectImage = (event) => {
		console.log(images);

		const targetId = event.target.id;
		const index = images.findIndex((image) => image.id === targetId);

		console.log(targetId, index);
		if (index === -1) return;

		setIndex(index);
	};

	const handleImageCarousel = (event) => {
		const length = images.length;
		let newIndex = index + Number(event.currentTarget.dataset.direction);

		if (newIndex === length) newIndex = 0;
		else if (newIndex < 0) newIndex = length - 1;

		setIndex(newIndex);
	};

	return (
		<div
			className={`${styles.backdrop} ${!isOpen && styles.closed}`}
			// ref={lightboxRef}
		>
			<div className={styles.lightboxContainer}>
				<button onClick={toggleLightBox} className={styles.buttonClose}>
					x
				</button>
				<div className={styles.bigImageContainer}>
					<button
						onClick={handleImageCarousel}
						data-direction={-1}
						className={`${styles.buttonLeftRight} ${styles.buttonLeft}`}
					>
						{"<"}
					</button>
					<img
						src={images[index].src}
						alt=""
						className={styles.fullImage}
					/>
					<button
						onClick={handleImageCarousel}
						data-direction={1}
						className={`${styles.buttonLeftRight} ${styles.buttonRight}`}
					>
						{">"}

						{/* <RightArrowIcon /> */}
					</button>
				</div>
				<div className={styles.circleContainer} onClick={handleSelectImage}>
					{/* {images.map()} */}
					{images.map((image, i) => (
						<ProductThumbnail
							image={image}
							targetIndex={index}
							currentIndex={i}
							key={image.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
