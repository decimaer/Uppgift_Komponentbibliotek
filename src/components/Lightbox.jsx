import { useState, useRef, useEffect } from "react";
import styles from "./Lightbox.module.css";
import styles2 from "./ProductThumbnail.module.css";

// import ProductThumbnail from "./ProductThumbnail";
// import { ReactComponent as CloseIcon } from "/src/assets/close-icon.svg";
// import { ReactComponent as LeftArrowIcon } from "/src/assets/left-arrow-icon.svg";
// import { ReactComponent as RightArrowIcon } from "/src/assets/right-arrow-icon.svg";

const ProductThumbnail = ({ image, targetIndex, currentIndex }) => {
	return (
		<div
			className={`${styles2.imgContainer} ${
				currentIndex === targetIndex && styles.imgContainerSelected
			}`}
			style={{ backgroundImage: `url(${image.src})` }}
		>
			<div
				className={`${styles2.imgOverlay} ${
					currentIndex === targetIndex && styles.imgOverlaySelected
				}`}
				id={image.id}
			></div>
			{/* 			<img
				src={image.src}
				alt=""
				className={`${styles.thumbnail} ${
					currentIndex === targetIndex && styles.thumbSelected
				}`}
				id={image.id}
			/> */}
		</div>
	);
};

const Lightbox = function ({
	images,
	// isLightboxOpen,
	lightboxRef,
	handleCloseLightbox,
	isOpen,
	setIsOpen,
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
			ref={lightboxRef}
		>
			<div className={styles.lightboxContainer}>
				<button
					onClickCapture={handleCloseLightbox}
					className={styles.buttonClose}
				>
					X{/* <CloseIcon /> */}
				</button>
				<div className={styles.bigImageContainer}>
					<button
						onClick={handleImageCarousel}
						data-direction={-1}
						className={`${styles.buttonLeftRight} ${styles.buttonLeft}`}
					>
						{"<"}
						{/* <LeftArrowIcon /> */}
					</button>
					<button
						onClick={handleImageCarousel}
						data-direction={1}
						className={`${styles.buttonLeftRight} ${styles.buttonRight}`}
					>
						{">"}

						{/* <RightArrowIcon /> */}
					</button>
					<img
						src={images[index].src}
						alt=""
						className={styles.fullImage}
					/>
				</div>
				<div className={styles.thumbContainer} onClick={handleSelectImage}>
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
