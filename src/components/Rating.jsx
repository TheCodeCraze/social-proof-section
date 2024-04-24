import styles from "../styles/Rating.module.css";
import PropTypes from "prop-types";

export const Rating = ({ content }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.icons}>
        <img src="/icon-star.svg" alt="Star rating illustration" />
        <img src="/icon-star.svg" alt="Star rating illustration" />
        <img src="/icon-star.svg" alt="Star rating illustration" />
        <img src="/icon-star.svg" alt="Star rating illustration" />
        <img src="/icon-star.svg" alt="Star rating illustration" />
      </div>
      <p className={styles.text}>{content}</p>
    </div>
  );
};

Rating.propTypes = {
  content: PropTypes.string.isRequired,
};
