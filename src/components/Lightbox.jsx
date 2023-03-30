import { useState } from "react";
import styles from "./Lightbox.module.css";

const Lightbox = function ({ images, isOpen, toggleLightBox }) {
	const [index, setIndex] = useState(0);
	const [imgIsLoaded, setImgIsLoaded] = useState(false);

	// remove scroll on body
	document.body.style.overflow = "hidden";

	const handleCloseLightbox = () => {
		if (!isOpen) document.body.style.overflow = "visible";

		toggleLightBox();
	};

	const handleSelectImage = (event) => {
		const targetId = event.target.id;
		const index = images.findIndex((image) => image.id === targetId);

		if (index === -1) return;

		setIndex(index);
	};

	const handleImageCarousel = (event) => {
		setImgIsLoaded(false);
		const length = images.length;
		let newIndex = index + Number(event.currentTarget.dataset.direction);

		if (newIndex === length) newIndex = 0;
		else if (newIndex < 0) newIndex = length - 1;

		setIndex(newIndex);
	};

	return (
		<div className={`${styles.backdrop} ${!isOpen && styles.closed}`}>
			<div className={styles.lightboxContainer}>
				<button
					onClick={handleCloseLightbox}
					className={styles.buttonClose}
				>
					x
				</button>
				<div className={styles.bigImageContainer}>
					<button
						onClick={handleImageCarousel}
						data-direction={-1}
						className={`${styles.buttonLeftRight} ${
							!imgIsLoaded && styles.hidden
						}`}
					>
						{"<"}
					</button>
					<img
						src={images[index].src}
						alt=""
						className={`${styles.fullImage}`}
						onLoad={() => setImgIsLoaded(true)}
					/>
					<div
						className={`${styles.loadingImage} ${
							imgIsLoaded && styles.hidden
						}`}
					>
						<p>Loading image...</p>
					</div>
					<button
						onClick={handleImageCarousel}
						data-direction={1}
						className={`${styles.buttonLeftRight} ${
							!imgIsLoaded && styles.hidden
						}`}
					>
						{">"}
					</button>
				</div>
				<div className={styles.circleContainer} onClick={handleSelectImage}>
					{images.map((image, i) => (
						<ImageSelect
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

const ImageSelect = ({ image, targetIndex, currentIndex }) => {
	return (
		<button
			className={`${styles.circle} ${
				currentIndex === targetIndex && styles.circleSelected
			}`}
			id={image.id}
		></button>
	);
};

export default Lightbox;
