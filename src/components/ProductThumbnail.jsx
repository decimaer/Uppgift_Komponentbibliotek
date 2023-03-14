import styles from "./ProductThumbnail.module.scss";

const ProductThumbnail = ({ image, targetIndex, currentIndex }) => {
	return (
		<div
			className={`${styles.imgContainer} ${
				currentIndex === targetIndex && styles.imgContainerSelected
			}`}
			style={{ backgroundImage: `url(${image.src})` }}
		>
			<div
				className={`${styles.imgOverlay} ${
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

export default ProductThumbnail;
